import java.util.List;

class Functional {
    public static void main(String[] args) {
        printAllNumberInStructured(List.of(12,9,13,4,6,2,4,12,15));
    }

    // Common way
    // private static void printAllNumberInStructured(List<Integer> numbers) {
    //     for(int number:numbers) {
    //         System.out.println(number);
    //     }
    // }


    // Functional way
    private static void printAllNumberInStructured(List<Integer> numbers) {
        numbers.stream()
            .forEach(Functional::print); // use method reference nameOfClass::nameOfMethod
    }

    public static void print(int number) {
        System.out.println(number);
    }
}
