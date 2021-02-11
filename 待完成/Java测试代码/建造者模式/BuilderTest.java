public class BuilderTest {

    public BuilderTest() {
        System.out.println("新建一个BuilderTest实例");
    }

    public static void main(String[] args){
        System.out.println("Hello");
        BuilderTest test = new Builder().setName("111").builder();
        BuilderTest test2 = new Builder().setName("222").builder();
        System.out.println(test.name);
        System.out.println(test2.name);
    }


    String name = "";

    public static class Builder{
        BuilderTest builderTest = new BuilderTest();

        public Builder setName(String name) {
            builderTest.name = name;
            return this;
        }

        public BuilderTest builder() {
            return builderTest;
        }
    }
}