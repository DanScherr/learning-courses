/* ILP506 – Turma Manhã(ou Tarde) – Nome: Daniel Scheicher */

import java.util.Scanner;
import java.util.ArrayList;

 
public class ex2 {
   public static void main (String[] args) {
      //Declarando, inicializando e instanciando..
      int min, qtd = 0, max, x;
      Scanner ler = new Scanner(System.in);
      ArrayList<Integer> v = new ArrayList<Integer>();
      
      //Condicao de max e min..
      do {
         System.out.print("Insira um numero maior ou igual a 2: ");
         min = ler.nextInt();
      } while(min<2);
      
      do {
         System.out.print("Insira um numero menor que 999999: ");
         max = ler.nextInt();
      } while(max > 999999);
      
      if (min > max) {
         x = min;
         min = max;
         max = x;
      }
      
      //Carregando Arraylist v com num primos entre min e max..
      for (int j=min; j<=max; j++) {
         if (ePrimo(j)) {
            v.add(j);
            qtd++;
         }
      }
      
      //Imprimindo valores entre min e max que sao primos..
      System.out.println("Valores digitados");
      for (int i = 0; i < v.size(); i++) {
         System.out.print("[" + i + "]: " + v.get(i) + "   ");
      }
      System.out.println("Qtde = " + qtd);
   }
   
   
   //Metodo eh primo..
   private static boolean ePrimo (int n) {
     boolean isValid = false;
     for (int i = 1; i <= n; i++) {
         int resto = n%i;
         if ((resto == 0) && (i != 1) && (i != n)){
            isValid=false;
            break;
         } else if (i==n){
            isValid=true;
            break;
         }
      }
     return isValid;
   }
}