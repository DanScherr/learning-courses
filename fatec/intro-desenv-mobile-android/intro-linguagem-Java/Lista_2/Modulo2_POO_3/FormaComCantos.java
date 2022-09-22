public class FormaComCantos {
  private double base;
  private double altura;
  public FormaComCantos() {
    setBase(0);
    setAltura(0);
  }
  public FormaComCantos(double b, double a) {
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

}