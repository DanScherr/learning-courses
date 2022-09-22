//Metodo eh primo..
public class Primo {
   private int numero;
   
   public Primo() {

   }
   
   public void setPrimo (int n) {
    this.numero = n;
   }
    
   public int getPrimo() {
    return (numero);
   }
  
   private static boolean ePrimo (int n) {
     for (int i = 1; i <= n; i++) {
        resto = n%i;
        if ((resto == 0) && (i != 1) && (i != n)) {
           return false;
        }
        else if (i==n) {
           return true;
        }
     }
   }
}