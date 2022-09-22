public class Trapezio extends FormaComCantos {
  private double baseMenor;
  public Trapezio() {
    super();
    setBaseMenor(0);
  }
  public Trapezio(double bMenor, double bMaior, double a) {
    super(bMaior, a);
    setBaseMenor(bMenor);
  }
  public void setBaseMenor(double valor) {
    baseMenor = valor;
  }
  public double getBaseMenor() {
    return (baseMenor);
  }
  public double calcArea() {
    return ((getBase() + getBaseMenor())  * getAltura() / 2);
  }
  public String nomeForma() {
    return ("Trapezio");
  }

}