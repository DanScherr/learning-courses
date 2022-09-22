public class Triangulo {
  private double base;
  private double altura;
  public Triangulo() {
    setBase(0);
    setAltura(0);
  }
  public Triangulo(double b, double a) {
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
    return (base * altura / 2);
  }

}