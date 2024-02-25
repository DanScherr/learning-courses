import java.util.List;

class Functional {
    public static void main(String[] args) {
        List<Integer> numbers = List.of(12,9,13,4,6,2,4,12,15);
        // printAllNumberInStructured(numbers);
        // printEvenNumbersInStructured(numbers);
        printSquareOfEvenNumbersInStructured(numbers);
    }

    // Common way
    // private static void printAllNumberInStructured(List<Integer> numbers) {
    //     for(int number:numbers) {
    //         System.out.println(number);
    //     }
    // }


    // Functional way
    private static void printAllNumberInStructured(List<Integer> numbers) {
        // numbers.stream()
        //     .forEach(Functional::print); // use method reference nameOfClass::nameOfMethod

        numbers.stream()
            .forEach(System.out::println); // className::staticMethod
    }

    private static void printEvenNumbersInStructured(List<Integer> numbers) {
        // numbers.stream()
                // Filter
                // .filter(Functional::isEven)
        //     .forEach(Functional::print); // use method reference nameOfClass::nameOfMethod

        numbers.stream()
            // Filter
            .filter(number -> number%2==0) // using lambda expression - simpler way to define method
            .forEach(System.out::println); // className::staticMethod
    }

    private static void printSquareOfEvenNumbersInStructured(List<Integer> numbers) {
        // numbers.stream()
                // Filter
                // .filter(Functional::isEven)
        //     .forEach(Functional::print); // use method reference nameOfClass::nameOfMethod

        numbers.stream()
            // Filter
            .filter(number -> number%2==0) // using lambda expression - simpler way to define method
            .map(number -> number*number)
            .forEach(System.out::println); // className::staticMethod
    }

    // public static void print(int number) {
    //     System.out.println(number);
    // }

    // private static boolean isEven(int number) {
    //     return number%2==0;
    // }

    
}
