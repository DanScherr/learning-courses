public class Retangulo {
  private double base;
  private double altura;
  public Retangulo() {
    setBase(0);
    setAltura(0);
  }
  public Retangulo(double b, double a) {
    setBase(b);
    setAltura(a);
  }
  public void setBase(double valor) {
    base = valor;
  }
  public double getBase() {
    return (base);
  }
  public void setAltura(double valor) {
    altura = valor;
  }
  public double getAltura() {
    return (altura);
  }
  public double calcArea() {
    return (base * altura);
  }

}