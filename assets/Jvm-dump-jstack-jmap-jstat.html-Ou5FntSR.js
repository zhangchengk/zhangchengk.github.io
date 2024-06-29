import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as n,a as e}from"./app-C3hOzZo_.js";const i="/assets/1-Cjmuh4Gd.png",p="/assets/2-DgcXXboM.png",t="/assets/3-D-DMm7Rr.png",l="/assets/4-C6D83nUl.png",d="/assets/5-DSKJpoOs.png",r={},c=e(`<p>这个问题阿里经常问，参考：<a href="https://www.cnblogs.com/aspirant/p/8625810.html" target="_blank" rel="noopener noreferrer">阿里面试</a></p><p>结论：</p><p><strong>(1)栈信息：<code>jstack &lt;pid&gt;</code>输出的信息</strong>。</p><p><strong>(2)堆信息：<code>jmap -dump &lt;pid&gt;</code>输出的文件</strong>，</p><p>(3)jstat查看gc情况，<code>jstat -gc &lt;PID&gt; </code>间隔毫秒数 比如 <code>jstat -gc 12345 5000</code> 也就是每隔5秒打印进程12345的 gc情况</p><h2 id="一、看一下-jstack" tabindex="-1"><a class="header-anchor" href="#一、看一下-jstack"><span>一、看一下 jstack</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    jstack -m \\&lt;pid\\&gt; &gt;jvm_deadlocks.txt   </span></span>
<span class="line"><span>    jstack -l \\&lt;pid\\&gt; &gt;jvm_listlocks.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考资料 <a href="https://docs.oracle.com/javase/6/docs/technotes/tools/share/jstack.html" target="_blank" rel="noopener noreferrer">jstack - Stack Trace</a></p><p>使用<code>top -H -p \\&lt;pid\\&gt;</code>找出某进程中要分析的线程ID，然后将线程ID转换为16进制后，在线程dump文件中搜索相关信息</p><p>首先看一下我自己在项目中使用 jstack如何查询问题：</p><p>可以使用jstat查看 gc情况</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    jstat -gc  12345  5000 （jstat -gc 进程号  间隔毫秒数）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>定位问题</p><p>(1) 首先 找到相应的进程 使用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    ps -ef | grep &#39;com.sankuai.qcs.regulation.dispatch&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>找到进程的ID;==&gt;21980</p><p>(2) <code>top -Hp 21980</code>（查询耗时最高的线程)，发现有个线程确实不正常；</p><p>(3)<code>jstack 21980 |grep &#39;线程的16进制的ID&#39;</code></p><p>注意 在第二步查到线程的ID之后，转换成16进制的。放在(3)里面；</p><p>进入系统 使用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    grep -n &#39;java.lang.Thread.State:BLOCKED&#39; jstack.log -A5;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查询：</p><p><img src="`+i+'" alt="" loading="lazy"><img src="'+p+'" alt="" loading="lazy"></p><p>Java通过jvm自己管理内存，同时Java提供了一些命令行工具，用于查看内存使用情况。<br> 这里主要介绍一下jstat、jmap命令以及相关工具。</p><p>很多情况下，都会出现dump这个字眼，java虚拟机jvm中也不例外，其中主要包括内存dump、线程dump。</p><p>当发现应用内存溢出或长时间使用内存很高的情况下，通过内存dump进行分析可找到原因。</p><p>当发现cpu使用率很高时，通过线程dump定位具体哪个线程在做哪个工作占用了过多的资源。</p><p>首先，内存dump是指通过<code>jmap -dump \\&lt;pid\\&gt;</code>输出的文件，而线程dump是指通过<code>jstack \\&lt;pid\\&gt;</code>输出的信息。</p><p>两个dump可以单独使用，也可以在特定场合下结合使用。</p><p>在linux操作系统下（已安装jdk），执行jps命令，列出正在运行的java程序的进程ID。</p><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用top查看目前正在运行的进程使用系统资源情况。</p><figure><img src="'+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其中进程号为24660的进程，jps输出列表和top列表中都出现，并且在top列表中显示是由java COMMAND启动的。</p><p>其中%MEM为2.9，说明占用系统内存为2.9%，当前系统大概8G内存；另外%CPU指的是当前进程使用CPU资源百分比；</p><h2 id="二、看一下jmap" tabindex="-1"><a class="header-anchor" href="#二、看一下jmap"><span>二、看一下jmap:</span></a></h2><p>使用 <code>jmap -heap pid</code> ，可以查看各个代的内存使用情况。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    jmap -heap 2083</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以观察到New Generation（Eden Space，From Space，To Space）,tenured generation,Perm Generation的内存使用情况</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    jmap -dump:format=b,file=heapdump.hprof &lt;pid&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>导出heap dump到文件heapdump.hprof</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    jmap -histo 2083 ｜ jmap -histo:live 2083</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以观察heap中所有对象的情况（heap中所有生存的对象的情况）。包括对象数量和所占空间大小。</p><p>jmap输出的 class name结果中：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    [C is a char[]</span></span>
<span class="line"><span>    [S is a short[]</span></span>
<span class="line"><span>    [I is a int[]</span></span>
<span class="line"><span>    [B is a byte[]</span></span>
<span class="line"><span>    [[I is a int[][]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>heap输出实例</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    $ jmap -heap 12264</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>JVM version is 25.65-b01</span></span>
<span class="line"><span></span></span>
<span class="line"><span>using parallel threads in the new generation.</span></span>
<span class="line"><span>using thread-local object allocation.</span></span>
<span class="line"><span>Concurrent Mark-Sweep GC</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Heap Configuration:</span></span>
<span class="line"><span>   MinHeapFreeRatio         = 40   MaxHeapFreeRatio         = 70   MaxHeapSize              = 8388608000 (8000.0MB)</span></span>
<span class="line"><span>   NewSize                  = 2006515712 (1913.5625MB)</span></span>
<span class="line"><span>   MaxNewSize               = 2006515712 (1913.5625MB)</span></span>
<span class="line"><span>   OldSize                  = 90636288 (86.4375MB)</span></span>
<span class="line"><span>   NewRatio                 = 2   SurvivorRatio            = 8   MetaspaceSize            = 21807104 (20.796875MB)</span></span>
<span class="line"><span>   CompressedClassSpaceSize = 1073741824 (1024.0MB)</span></span>
<span class="line"><span>   MaxMetaspaceSize         = 17592186044415 MB</span></span>
<span class="line"><span>   G1HeapRegionSize         = 0 (0.0MB)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Heap Usage:</span></span>
<span class="line"><span>New Generation (Eden + 1 Survivor Space):</span></span>
<span class="line"><span>   capacity = 1805910016 (1722.25MB)</span></span>
<span class="line"><span>   used     = 788045040 (751.5383148193359MB)</span></span>
<span class="line"><span>   free     = 1017864976 (970.7116851806641MB)</span></span>
<span class="line"><span>   43.637004779755316% used</span></span>
<span class="line"><span>Eden Space:</span></span>
<span class="line"><span>   capacity = 1605304320 (1530.9375MB)</span></span>
<span class="line"><span>   used     = 630378472 (601.1757583618164MB)</span></span>
<span class="line"><span>   free     = 974925848 (929.7617416381836MB)</span></span>
<span class="line"><span>   39.26847166274367% used</span></span>
<span class="line"><span>From Space:</span></span>
<span class="line"><span>   capacity = 200605696 (191.3125MB)</span></span>
<span class="line"><span>   used     = 157666568 (150.36255645751953MB)</span></span>
<span class="line"><span>   free     = 42939128 (40.94994354248047MB)</span></span>
<span class="line"><span>   78.59525982751757% used</span></span>
<span class="line"><span>To Space:</span></span>
<span class="line"><span>   capacity = 200605696 (191.3125MB)</span></span>
<span class="line"><span>   used     = 0 (0.0MB)</span></span>
<span class="line"><span>   free     = 200605696 (191.3125MB)</span></span>
<span class="line"><span>   0.0% used</span></span>
<span class="line"><span>concurrent mark-sweep generation:</span></span>
<span class="line"><span>   capacity = 6382092288 (6086.4375MB)</span></span>
<span class="line"><span>   used     = 4612472232 (4398.79630279541MB)</span></span>
<span class="line"><span>   free     = 1769620056 (1687.6411972045898MB)</span></span>
<span class="line"><span>   72.27210174745753% used</span></span>
<span class="line"><span></span></span>
<span class="line"><span>18841 interned Strings occupying 1633048 bytes.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内存dump</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    jmap –dump:live,format=b,file=heap.bin &lt;pid&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>参考资料：<a href="http://docs.oracle.com/javase/6/docs/technotes/tools/share/jmap.html" target="_blank" rel="noopener noreferrer">jmap - Memory Map</a></p><p>将生成的heap.bin文件，使用ha456.jar工具打开分析。java -jar -Xmx3000m ha456.jar</p><h2 id="三、jstat查看-gc实时执行情况" tabindex="-1"><a class="header-anchor" href="#三、jstat查看-gc实时执行情况"><span>三、jstat查看 gc实时执行情况</span></a></h2><p>jstat命令命令格式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    jstat [Options] vmid [interval] [count]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>命令参数说明：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    Options，一般使用 -gcutil 或  -gc 查看gc 情况</span></span>
<span class="line"><span>    pid，当前运行的 java进程号   </span></span>
<span class="line"><span>    interval，间隔时间，单位为秒或者毫秒   </span></span>
<span class="line"><span>    count，打印次数，如果缺省则打印无数次</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Options 参数如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    -gc：统计 jdk gc时 heap信息，以使用空间字节数表示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -gcutil：统计 gc时， heap情况，以使用空间的百分比表示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -class：统计 class loader行为信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -compile：统计编译行为信息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -gccapacity：统计不同 generations（新生代，老年代，持久代）的 heap容量情况</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -gccause：统计引起 gc的事件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -gcnew：统计 gc时，新生代的情况</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -gcnewcapacity：统计 gc时，新生代 heap容量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -gcold：统计 gc时，老年代的情况</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -gcoldcapacity：统计 gc时，老年代 heap容量</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -gcpermcapacity：统计 gc时， permanent区 heap容量</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    $ jstat -gc 12538 5000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>每5 秒一次显示进程号为 12538的 java进程的 GC情况，结果如下图：</p><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>结果说明</p><table><thead><tr><th>col 1</th><th>col 2</th></tr></thead><tbody><tr><td>标志</td><td>说明</td></tr><tr><td>S0C</td><td>年轻代中第一个survivor区的容量 (字节)</td></tr><tr><td>S1C</td><td>年轻代中第二个survivor区的容量 (字节)</td></tr><tr><td>S0U</td><td>年轻代中第一个survivor区目前已使用空间 (字节)</td></tr><tr><td>S1U</td><td>年轻代中第二个survivor区目前已使用空间 (字节)</td></tr><tr><td>EC</td><td>年轻代中Eden的容量 (字节)</td></tr><tr><td>EU</td><td>年轻代中Eden目前已使用空间 (字节)</td></tr><tr><td>OC</td><td>Old代的容量 (字节)</td></tr><tr><td>OU</td><td>Old代目前已使用空间 (字节)</td></tr><tr><td>PC</td><td>Perm(持久代)的容量 (字节)</td></tr><tr><td>PU</td><td>Perm(持久代)目前已使用空间 (字节)</td></tr><tr><td>YGC</td><td>从应用程序启动到采样时年轻代中gc次数</td></tr><tr><td>YGCT</td><td>从应用程序启动到采样时年轻代中gc所用时间(s)</td></tr><tr><td>FGC</td><td>从应用程序启动到采样时old代(全gc)gc次数</td></tr><tr><td>FGCT</td><td>从应用程序启动到采样时old代(全gc)gc所用时间(s)</td></tr><tr><td>GCT</td><td>从应用程序启动到采样时gc用的总时间(s)</td></tr><tr><td>NGCMN</td><td>年轻代(young)中初始化(最小)的大小 (字节)</td></tr><tr><td>NGCMX</td><td>年轻代(young)的最大容量 (字节)</td></tr><tr><td>NGC</td><td>年轻代(young)中当前的容量 (字节)</td></tr><tr><td>OGCMN</td><td>old代中初始化(最小)的大小 (字节)</td></tr><tr><td>OGCMX</td><td>old代的最大容量 (字节)</td></tr><tr><td>OGC</td><td>old代当前新生成的容量 (字节)</td></tr><tr><td>PGCMN</td><td>perm代中初始化(最小)的大小 (字节)</td></tr><tr><td>PGCMX</td><td>perm代的最大容量 (字节)</td></tr><tr><td>PGC</td><td>perm代当前新生成的容量 (字节)</td></tr><tr><td>S0</td><td>年轻代中第一个survivor区已使用的占当前容量百分比</td></tr><tr><td>S1</td><td>年轻代中第二个survivor区已使用的占当前容量百分比</td></tr><tr><td>E</td><td>年轻代中Eden已使用的占当前容量百分比</td></tr><tr><td>O</td><td>old代已使用的占当前容量百分比</td></tr><tr><td>P</td><td>perm代已使用的占当前容量百分比</td></tr><tr><td>S0CMX</td><td>年轻代中第一个survivor区的最大容量 (字节)</td></tr><tr><td>S1CMX</td><td>年轻代中第二个survivor区的最大容量 (字节)</td></tr><tr><td>ECMX</td><td>年轻代中Eden的最大容量 (字节)</td></tr><tr><td>DSS</td><td>当前需要survivor区的容量 (字节)（Eden区已满）</td></tr><tr><td>TT</td><td>持有次数限制</td></tr><tr><td>MTT</td><td>最大持有次数限制</td></tr></tbody></table><p>jstatd 启动jvm 监控服务</p><p>它是一个基于 rmi的应用，向远程机器提供本机 jvm应用程序的信息。默认端口 1099。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    $ jstatd -J-Djava.security.policy=my.policy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>二、jmap查看各个代的内存使用</p><p>jmap 可以从 core文件或进程中获得内存的具体匹配情况，包括 Heap size, Perm size等等。</p><p>jmap命令格式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>     jmap [ option ] &lt;pid&gt; | &lt;executable core&gt; | &lt;[server-id@]remote-hostname-or-IP&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>1）参数说明</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    pid：java进程 id</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    executable：产生 core dump的 java可执行程序</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    core：core dump文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    remote-hostname-or-IP：远程 debug服务的主机名或 ip</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server-id：远程 debug服务的 id</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2） option参数：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>    -heap </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    打印heap的概要信息，GC 使用的算法，heap的配置及使用情况 . </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -histo[:live] </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    打印jvm heap 的直方图。输出类名、每个类的实例数目、对象占用大小。 VM的内部类名字开头会加上前缀 ”*”. </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    如果加上live 则只统计活的对象数量。 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -dump:[live,]format=b,file=&lt;filename&gt; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    使用hprof二进制形式，导出heap 内容到文件filename。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    假如指定live 选项，那么只输出活的对象到文件 .  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -finalizerinfo </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    打印正等候回收的对象的信息 .</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -permstat </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    打印classload 和jvm heap 持久代的信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    包含每个classloader 的名字、是否存活、地址、父 classloade、加载的 class数量、内部 String的数量和占用内存数。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -F</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    当pid没有响应的时候，与-dump或者 -histo共同使用，强制生成 dump文件或 histo信息 . 在这个模式下 ,live子参数无效 . </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    -J</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    传递参数给启动jmap 的jvm.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>64位机上使用需要使用如下方式： <code>jmap -J-d64 -heap pid</code></p><p>jmap 相关工具</p><p>jmap dump生成的 heap dump文件，可以使用 IBM HeapAnalyzer分析工具分析</p><p>下载：</p><p>https://www.ibm.com/developerworks/community/groups/service/html/communityview?communityUuid=4544bafe-c7a2-455f-9d43-eb866ea60091</p><p>运行：<code>java –Xmx800m –jar ha456.jar </code></p><p>三、jstack和 jinfo分析java core文件</p><p>jstack工具可以用来获得 core文件的 java stack和 native stack的信息，从而可以知道 java程序是如何崩溃和在程序何处发生问题。</p><p>另外，jstack 工具还可以附属到正在运行的 java程序中，看到 java程序的 java stack和native stack 的信息，如果现在运行的 java程序呈现 hung的状态， jstack是非常有用的。</p><p>命令格式：<code>$ jstack pid </code></p><p>jinfo可以从 core文件里面知道崩溃的 Java应用程序的配置信息。</p><p>命令额格式：<code>$ jinfo pid </code></p>`,88),v=[c];function h(m,o){return n(),a("div",null,v)}const b=s(r,[["render",h],["__file","Jvm-dump-jstack-jmap-jstat.html.vue"]]),k=JSON.parse('{"path":"/JAVA/Jvm-dump-jstack-jmap-jstat.html","title":"Jvm dump jstack jmap jstat","lang":"zh-CN","frontmatter":{"title":"Jvm dump jstack jmap jstat","date":"2020-04-14T00:00:00.000Z","category":"Java","description":"这个问题阿里经常问，参考：阿里面试 结论： (1)栈信息：jstack <pid>输出的信息。 (2)堆信息：jmap -dump <pid>输出的文件， (3)jstat查看gc情况，jstat -gc <PID> 间隔毫秒数 比如 jstat -gc 12345 5000 也就是每隔5秒打印进程12345的 gc情况 一、看一下 jstack 参考...","head":[["meta",{"property":"og:url","content":"https://zhangchengk.github.io/JAVA/Jvm-dump-jstack-jmap-jstat.html"}],["meta",{"property":"og:site_name","content":"Panda诚的博客"}],["meta",{"property":"og:title","content":"Jvm dump jstack jmap jstat"}],["meta",{"property":"og:description","content":"这个问题阿里经常问，参考：阿里面试 结论： (1)栈信息：jstack <pid>输出的信息。 (2)堆信息：jmap -dump <pid>输出的文件， (3)jstat查看gc情况，jstat -gc <PID> 间隔毫秒数 比如 jstat -gc 12345 5000 也就是每隔5秒打印进程12345的 gc情况 一、看一下 jstack 参考..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-27T11:40:02.000Z"}],["meta",{"property":"article:author","content":"Panda诚"}],["meta",{"property":"article:published_time","content":"2020-04-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T11:40:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jvm dump jstack jmap jstat\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-04-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-27T11:40:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Panda诚\\",\\"url\\":\\"https://zhangchengk.github.io/about/intro.html\\"}]}"]]},"headers":[{"level":2,"title":"一、看一下 jstack","slug":"一、看一下-jstack","link":"#一、看一下-jstack","children":[]},{"level":2,"title":"二、看一下jmap:","slug":"二、看一下jmap","link":"#二、看一下jmap","children":[]},{"level":2,"title":"三、jstat查看 gc实时执行情况","slug":"三、jstat查看-gc实时执行情况","link":"#三、jstat查看-gc实时执行情况","children":[]}],"git":{"createdTime":1719488402000,"updatedTime":1719488402000,"contributors":[{"name":"zhangcheng","email":"zhangchengk@yonyou.com","commits":1}]},"readingTime":{"minutes":8.05,"words":2414},"filePathRelative":"JAVA/Jvm-dump-jstack-jmap-jstat.md","localizedDate":"2020年4月14日","excerpt":"<p>这个问题阿里经常问，参考：<a href=\\"https://www.cnblogs.com/aspirant/p/8625810.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">阿里面试</a></p>\\n<p>结论：</p>\\n<p><strong>(1)栈信息：<code>jstack &lt;pid&gt;</code>输出的信息</strong>。</p>\\n<p><strong>(2)堆信息：<code>jmap -dump &lt;pid&gt;</code>输出的文件</strong>，</p>\\n<p>(3)jstat查看gc情况，<code>jstat -gc  &lt;PID&gt; </code>间隔毫秒数 比如  <code>jstat -gc 12345 5000</code>  也就是每隔5秒打印进程12345的 gc情况</p>","autoDesc":true}');export{b as comp,k as data};