public class Triangulo extends FormaComCantos {
  public Triangulo() {
    super();
  }
  public Triangulo(double b, double a) {
    super(b, a);
  }
  public double calcArea() {
    return (getBase() * getAltura() / 2);
  }
  public String nomeForma() {
    return ("Triangulo");
  }

}