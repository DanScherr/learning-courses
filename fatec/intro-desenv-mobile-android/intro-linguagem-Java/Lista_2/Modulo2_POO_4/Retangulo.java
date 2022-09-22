public class Retangulo extends FormaComCantos {

  public Retangulo() {
    super();
  }
  public Retangulo(double b, double a) {
    super(b, a);
  }
  public double calcArea() {
    return (getBase() * getAltura());
  }
  public String nomeForma() {
    return ("Retangulo");
  }

}