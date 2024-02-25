import java.util.List;
import java.util.Optional;      
import java.util.function.Predicate;


public class Optional {
    public static void main(String[] args) {
        List<String> fruits = List.of("Apple", "Mango", "Banana");

        // Predicate<? super String> predicate = fruit -> fruit.startsWith("b");
        Optional<String> optional = fruits.stream().filter(predicate).findFirst();
        // Its optional cause we cant know if it'll find a fruit that starts with b
        System.out.println(optional);
        System.out.println(optional.isEmpty());
        System.out.println(optional.isPresent());
        System.out.println(optional.get());

        Optional<String> fruit = Optional.of("banana");
        Optional<String> empty = Optional.empty();

        System.out.println(fruit);

    }
}
