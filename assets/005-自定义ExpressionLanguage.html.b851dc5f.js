import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{d as e}from"./app.5c332ac6.js";var a="/assets/1.b0a74e55.png",s="/assets/2.f0a21e6c.png",t="/assets/3.ccdec93c.png",i="/assets/4.ca7ab86b.png",o="/assets/5.71454f58.png",l="/assets/6.e4307487.png",r="/assets/7.e7db7761.png",c="/assets/8.b306c040.png",u="/assets/9.9f502ba2.png";const p={},d=e('<p>\u6211\u4EEC\u90FD\u77E5\u9053NIFI\u8BBE\u8BA1\u4E86\u4E00\u5957\u81EA\u5DF1\u7684\u8868\u8FBE\u5F0F\u8BED\u8A00\uFF0C\u5728\u8BBE\u8BA1\u6D41\u7A0B\u7684\u65F6\u5019\u8868\u8FBE\u5F0F\u8BED\u8A00\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u5F88\u5927\u7684\u7075\u6D3B\u6027\uFF0C\u5728\u5B98\u65B9\u6587\u6863\u4E2D\u5BF9\u8868\u8FBE\u5F0F\u8BED\u8A00\u90FD\u6709\u5F88\u8BE6\u7EC6\u7684\u8BF4\u660E\u548C\u793A\u8303\uFF0C\u4F46\u6709\u7684\u65F6\u5019\u6211\u4EEC\u671F\u671B\u589E\u52A0\u4E00\u5957\u7279\u5B9A\u60C5\u5883\uFF0C\u9002\u5408\u6211\u4EEC\u81EA\u5DF1\u7279\u6B8A\u7684\u6D41\u7A0B\u7684\u8868\u8FBE\u5F0F\u51FD\u6570\uFF0C\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\u4E00\u4E2A\u589E\u52A0\u81EA\u5B9A\u4E49NIFI\u8868\u8FBE\u5F0F\u51FD\u6570\u7684demo\u3002</p><h2 id="\u573A\u666F\u5047\u8BBE" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F\u5047\u8BBE" aria-hidden="true">#</a> \u573A\u666F\u5047\u8BBE</h2><p>\u6211\u4EEC\u5728\u5C5E\u6027\u4E2D\u6709\u4E00\u4E9B\u4E2D\u6587\uFF0C\u5728\u6D41\u7A0B\u91CC\u9700\u8981\u628A\u8FD9\u4E9B\u503C\u8F6Cbytes\u6700\u540E\u5B58\u50A8\u8D77\u6765\uFF0C\u90A3\u6211\u4EEC\u77E5\u9053\u5728Java\u4E2D\uFF0CString\u7684getBytes()\u65B9\u6CD5\u662F\u5F97\u5230\u4E00\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u9ED8\u8BA4\u7684\u7F16\u7801\u683C\u5F0F\u7684\u5B57\u8282\u6570\u7EC4\u3002\u8FD9\u4E2A\u8868\u793A\u5728\u4E0D\u540COS\u4E0B\uFF0C\u8FD4\u56DE\u7684\u4E1C\u897F\u4E0D\u4E00\u6837\uFF01 String.getBytes(String decode)\u65B9\u6CD5\u4F1A\u6839\u636E\u6307\u5B9A\u7684decode\u7F16\u7801\u8FD4\u56DE\u67D0\u5B57\u7B26\u4E32\u5728\u8BE5\u7F16\u7801\u4E0B\u7684byte\u6570\u7EC4\u8868\u793A\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u5305\u88C5\u4E00\u4E2AgetBytes\u7684\u51FD\u6570</p><p><img src="'+a+`" alt="" loading="lazy"></p><h2 id="nifi\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#nifi\u5F00\u53D1" aria-hidden="true">#</a> NIFI\u5F00\u53D1</h2><p>\u5728nifi-expression-language\u5B50\u9879\u76EE\u4E2D\u8FDB\u884C\u81EA\u5B9A\u4E49\u51FD\u6570\u5F00\u53D1\uFF0C\u5728\u8FD9\u4E2A\u5B50\u9879\u76EE\u4E2D\u6709\u4E2Areadme\u6587\u4EF6\uFF0C\u91CC\u9762\u8F83\u4E3A\u8BE6\u7EC6\u7684\u9610\u8FF0\u4E86\u81EA\u5B9A\u4E49\u5F00\u53D1\u8868\u8FBE\u5F0F\u8BED\u8A00\u7684\u6D41\u7A0B\u548C\u65B9\u6CD5\uFF0C\u5728\u8FD9\u91CC\u6211\u76F4\u63A5\u590D\u5236\u4E00\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
This document is intended to provide a walk-through of what is necessary
in order to add a new function to the Expression Language. Doing so requires
a handful of steps, so we will outline each of those steps here, in the order
that they must be done. While this documentation is fairly verbose, it is often
the case that reading the documentation takes longer than performing the tasks
outlined by the documentation.


1) In order to make the nifi-expression-language Maven module compile in your IDE, you may need to add the ANTLR-generated sources to your IDE&#39;s classpath.
   This can be done using Eclipse, as follows:
    - Right-click on the nifi-expression-language project
    - Go to &quot;Properties&quot; on the context menu
    - Go to the &quot;Java Build Path&quot; item in the left tree and choose the &quot;Source&quot; tab.
    - Click &quot;Add Folder...&quot;
    - Add the target/generated-sources/antlr3 folder. If this folder does not exist, first build the project from Maven and then
      right-click on the nifi-expression-language project in Eclipse and click Refresh.
    - Click OK to close all dialogs.

2) Add the method name to the Tokens for the Lexer
	- Open the src/main/antlr3/org/apache/nifi/attribute/expression/language/antlr/AttributeExpressionLexer.g file
	- Add the function name to the list of tokens in this file. These functions are grouped by the number of arguments
	  that they take. This grouping mechanism could probably be made better, perhaps grouping by the type of function
	  provided. However, for now, it is best to keep some sort of structure, at least. If the function has optional
	  arguments, the function should be grouped by the maximum number of arguments that it takes (for example, the
	  substring function can take 1 or 2 arguments, so it is grouped with the &#39;2 argument functions&#39;).
	  The syntax to use is:

	  &lt;Token Name&gt; : &#39;&lt;function name&gt;&#39;;

	  The Token Name should be all-caps and words should be separated by underscores. The Token Name is what will be used to
	  identify the token when ANTLR parses an Expression. The function name should use camel case starting with a lower-case
	  letter. This is the name of the function as it will be referenced in the Expression Language.
	- Save the AttributeExpressionLexer.g file

3) Add the method to the grammar
	- Open the src/main/antlr3/org/apache/nifi/attribute/expression/language/antlr/AttributeExpressionParser.g file
	- Starting around line 75, the functions are defined, grouped by the type of value returned. We can add the new function
	  into the grammar here. Please see the ANTLR documentation for syntax on the grammar used. Note that this is ANTLR 3, NOT ANTLR 4.
	  The idea here is to spell out the syntax that should be used for the function. So generally, we do this by specifying the function name,
	  &quot;LPAREN!&quot; (which indicates a left parenthesis and the ! indicates that we do not want this passed to us when obtaining the parsed tokens),
	  and then a list of arguments that are separated by &quot;COMMA!&quot; (again, indicating a comma character and that we do not want the token passed
	  to us when we are looking at parsed tokens). We then end with the matching &quot;RPAREN!&quot;.
	- Save this file.

4) Rebuild via Maven
	- In order to make sure that we now can reference the tokens that are generated for our new function, we need to rebuild via Maven.
	  We can do this by building just the nifi-expression-language project, rather than rebuilding the entire NiFi code base.
	- If necessary, right-click on the nifi-expression-language project in your IDE and refresh / update project from new Maven build.
	  This is generally necessary when using Eclipse.

5) Add the logic for the function
	- In the src/main/java/org/apache/nifi/attribute/expression/language/evaluation/function package directory, we will need to create a new
	  class that is capable of implementing the logic of the new function. Create a class using the standard naming convention of
	  &lt;function name&gt;Evaluator and extends the appropriate abstract evaluator. If the function will return a String, the evaluator should extend
	  StringEvaluator. If the function will return a boolean, the evaluator should extend BooleanEvaluator. There are also evaluators for Date
	  and Number return types.
	- Generally the constructor for the evaluator will take an Evaluator for the &quot;Subject&quot; and an Evaluator for each argument. The subject is the
	  value that the function will be evaluated against. The substring function, for instance, takes a subject of type String. Thinking in terms of
	  Java, the &quot;subject&quot; is the object on which the function is being called. It is important to take Evaluator objects and not just a String,
	  for instance, as we have to ensure that we determine that actual values to use dynamically at runtime.
	- Implement the functionality as appropriate by implementing the abstract methods provided by the abstract Evaluator that is being extended by
	  your newly created Evaluator.
	- The Evaluator need not be thread-safe. The existing Evaluators are numerous and provide great examples for understanding the API.

6) Add the logic to the query parser
	- Generally, when using ANTLR, the preferred method to parse the input is to use a Tree Walker. However, this is far less intuitive for many
	  Java developers (including those of us who wrote the Expression Language originally). As a result, we instead use ANTLR to tokenize and parse the
	  input and then obtain an Abstract Syntax Tree and process this &quot;manually&quot; in Java code. This occurs in the Query class.
	- We can add the function into our parsing logic by updating the #buildFunctionEvaluator method of the org.apache.nifi.attribute.expression.compile.ExpressionCompiler class.
	  A static import will likely need to be added to the Query class in order to reference the new token. The token can then be added to the existing
	  &#39;case&#39; statement, which will return a new instance of the Evaluator that was just added.

7) Add Unit Tests!
	- Unit tests are critical for the Expression Language. These expressions can be used throughout the entire application and it is important that each function
	  perform its task properly. Otherwise, incorrect routing decisions could be made, or data could become corrupted as a result.
	- Each function should have its battery of unit tests added to the TestQuery class. This class includes a convenience method named #verifyEquals that is
	  used to ensure that the Expression returns the same value, regardless of how it is compiled and evaluated.

8) Add Documentation!
	- The documentation for each function is provided in the nifi-docs module, under src/main/asciidoc/expression-language-guide.adoc.
	  The format of the document is crucial to maintain, as this document is not only rendered as HTML in the NiFi Documentation page, but the
	  CSS classes that are used in the rendered docs are also made use of by the NiFi UI. When a user is entering an Expression Language expression and
	  presses Ctrl+Space, the UI provides auto-completion information as well as inline documentation for each function. This information is pulled
	  directly from the HTML that is generated from this expression-language-guide file.
	- Rebuild NiFi and run the application. Add an UpdateAttribute Processor to the graph and add a new property. For the value, type the Expression Language
	  opening tokens \${ and then press Ctrl+Space to ensure that the function and its documentation is presented as expected. Most functions that are added
	  will require a Subject. In order to see the function, then, you will need to provide a subject, such as typing &quot;\${myVariable:&quot; (without the quotes)
	  and then press Ctrl+Space. This step is important, as it is quite easy to make a mistake when creating the documentation using a free-form text editor,
	  and this will ensure that users receive a very consistent and quality experience when using the new function.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u6211\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u6211\u4EEC\u8BBE\u8BA1\u7684getBytes\u662F\u600E\u4E48\u5B9E\u73B0\u7684</p><h3 id="\u7B2C\u4E00\u6B65-\u7F16\u8F91antlr\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u6B65-\u7F16\u8F91antlr\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u7B2C\u4E00\u6B65 \u7F16\u8F91antlr\u914D\u7F6E\u6587\u4EF6</h3><p>(antlr\u662F\u4E2A\u4EC0\u4E48\u81EA\u884C\u67E5\u8BE2\u8D44\u6599\uFF0C\u4E5F\u4E0D\u7528\u60F3\u592A\u591A\uFF0C\u7167\u7740\u4E0A\u9762\u7684\u6D41\u7A0B\u5C31\u80FD\u81EA\u5DF1\u5B9E\u73B0\u81EA\u5B9A\u4E49\u8868\u8FBE\u5F0F\u8BED\u8A00\u51FD\u6570\u4E86)</p><p><img src="`+s+'" alt="" loading="lazy"></p><p><img src="'+t+'" alt="" loading="lazy"></p><h3 id="\u7B2C\u4E8C\u6B65-\u65B0\u5EFAevaluator" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u6B65-\u65B0\u5EFAevaluator" aria-hidden="true">#</a> \u7B2C\u4E8C\u6B65 \u65B0\u5EFAEvaluator</h3><p>\u5177\u4F53\u8BE5\u7EE7\u627F\u54EA\u4E00\u4E2AEvaluator\uFF0C\u770B\u4E0A\u9762\u7684\u8BF4\u660E\u548C\u6E90\u7801\uFF0C\u6211\u8FD9\u91CC\u671F\u671BgetBytes\u8FD4\u56DE\u7684\u662Fbyte\u6570\u7EC4\u7684\u5B57\u7B26\u4E32</p><p><img src="'+i+`" alt="" loading="lazy"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GetBytesEvaluator</span> <span class="token keyword">extends</span> <span class="token class-name">StringEvaluator</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Evaluator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> subject<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Evaluator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> charSetStr<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">GetBytesEvaluator</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Evaluator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> subject<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">Evaluator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> charSetStr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subject <span class="token operator">=</span> subject<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>charSetStr <span class="token operator">=</span> charSetStr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">QueryResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">EvaluationContext</span> evaluationContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">String</span> subjectValue <span class="token operator">=</span> subject<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span>evaluationContext<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> charSetStrValue <span class="token operator">=</span> charSetStr<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span>evaluationContext<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>charSetStrValue<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            charSetStrValue <span class="token operator">=</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span>UTF_8<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">StringQueryResult</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> subjectValue <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>subjectValue<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span>charSetStrValue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">UnsupportedEncodingException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">StringQueryResult</span><span class="token punctuation">(</span>subjectValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Evaluator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getSubjectEvaluator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7B2C\u4E09\u6B65-\u7528maven\u91CD\u65B0\u7F16\u8BD1\u4E00\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u6B65-\u7528maven\u91CD\u65B0\u7F16\u8BD1\u4E00\u4E0B" aria-hidden="true">#</a> \u7B2C\u4E09\u6B65 \u7528maven\u91CD\u65B0\u7F16\u8BD1\u4E00\u4E0B</h3><p>\u5176\u5B9E\u4E3B\u8981\u662F\u628A\u6211\u4EEC\u4FEE\u6539\u7684antlr\u6587\u4EF6\u7F16\u8BD1\u6210\u65B0\u7684\u7C7B</p><h3 id="\u7B2C\u56DB\u6B65-\u6CE8\u518Cgetbytes\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u56DB\u6B65-\u6CE8\u518Cgetbytes\u51FD\u6570" aria-hidden="true">#</a> \u7B2C\u56DB\u6B65 \u6CE8\u518CgetBytes\u51FD\u6570</h3><p><img src="`+o+'" alt="" loading="lazy"></p><h3 id="\u7B2C\u4E94\u6B65-\u91CD\u65B0\u7F16\u8BD1nifi" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E94\u6B65-\u91CD\u65B0\u7F16\u8BD1nifi" aria-hidden="true">#</a> \u7B2C\u4E94\u6B65 \u91CD\u65B0\u7F16\u8BD1NIFI</h3><p>\u4E5F\u53EF\u4EE5\u5355\u72EC\u7F16\u8BD1nifi-expression-language\u548C\u5F15\u7528nifi-expression-language\u7684\u5176\u4ED6\u5B50\u9879\u76EE\uFF0C\u6211\u89C9\u5F97\u6328\u4E2A\u627E\u6709\u4E9B\u8D39\u52B2\uFF0C\u5C31\u91CD\u65B0\u7F16\u8BD1NIFI\u4E86\u3002</p><h3 id="\u6548\u679C\u5C55\u793A" tabindex="-1"><a class="header-anchor" href="#\u6548\u679C\u5C55\u793A" aria-hidden="true">#</a> \u6548\u679C\u5C55\u793A</h3><p><img src="'+l+'" alt="" loading="lazy"></p><p><img src="'+r+'" alt="" loading="lazy"></p><p><img src="'+c+'" alt="" loading="lazy"></p><p><img src="'+u+'" alt="" loading="lazy"></p>',27);function v(h,m){return d}var g=n(p,[["render",v],["__file","005-\u81EA\u5B9A\u4E49ExpressionLanguage.html.vue"]]);export{g as default};
