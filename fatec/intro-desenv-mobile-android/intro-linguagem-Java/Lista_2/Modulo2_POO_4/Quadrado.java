public class Quadrado extends FormaComCantos {
  public Quadrado() {
    super();
  }
  public Quadrado(double lado) {
    super(lado, lado);
  }
  public double calcArea() {
    return (getBase() * getAltura());
  }
  public String nomeForma() {
    return ("Quadrado");
  }

}