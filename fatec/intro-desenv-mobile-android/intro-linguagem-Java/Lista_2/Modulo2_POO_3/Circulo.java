public class Circulo {
  private double raio;
  public Circulo() {
    setRaio(0);
  }
  public Circulo(double r) {
    setRaio(r);
  }
  public void setRaio(double valor) {
    raio = valor;
  }
  public double getRaio() {
    return (raio);
  }
  public double calcArea() {
    return (3.1415926 * raio * raio);
  }

}