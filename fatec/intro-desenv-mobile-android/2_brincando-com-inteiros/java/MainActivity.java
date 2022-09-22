package com.semestre1.brincandocominteiros;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.text.method.ScrollingMovementMethod;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import java.util.Random;

public class MainActivity extends AppCompatActivity {
    //criar objetos das classes do botão
    private TextView txtGerado;
    private EditText edtTransfere;
    private TextView txtParidade;
    private TextView txtPrimo;
    private TextView txtDivisores;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //instanciar os objs das classes declarados e capturar o id para linkar
        txtGerado = findViewById(R.id.txtGerado);
        edtTransfere = findViewById(R.id.edtTransfere);
        txtParidade = findViewById(R.id.txtParidade);
        txtPrimo = findViewById(R.id.txtPrimo);
        txtDivisores = findViewById(R.id.txtDivisores);

        //metodo para fazer rolamento do txtDivisores;
        //n deve fica no meotodo txtDivisores
        //pois toda vez que o botao ser clicado, gerará um novo objeto na memoria
        //toda vez que o usuario clicar
        //ñ esquecer de modif o scrollbarStyel nos layouts
        txtDivisores.setMovementMethod(new ScrollingMovementMethod());
    }

    //Salva tudo para manter os dados no textView
    @Override
    public void onSaveInstanceState(Bundle savedInstanceState) {
        super.onSaveInstanceState(savedInstanceState);
        TextView txt;
        txt = findViewById(R.id.txtGerado);
        savedInstanceState.putString("gerado", txt.getText().toString());
        txt = findViewById(R.id.txtParidade);
        savedInstanceState.putString("paridade", txt.getText().toString());
        txt = findViewById(R.id.txtPrimo);
        savedInstanceState.putString("primo", txt.getText().toString());
        txt = findViewById(R.id.txtDivisores);
        savedInstanceState.putString("divisores", txt.getText().toString());
    }
    @Override
    public void onRestoreInstanceState(Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        TextView txt;
        String s;
        s = savedInstanceState.getString("gerado");
        txt = findViewById(R.id.txtGerado);
        txt.setText(s);
        s = savedInstanceState.getString("paridade");
        txt = findViewById(R.id.txtParidade);
        txt.setText(s);
        s = savedInstanceState.getString("primo");
        txt = findViewById(R.id.txtPrimo);
        txt.setText(s);
        s = savedInstanceState.getString("divisores");
        txt = findViewById(R.id.txtDivisores);
        txt.setText(s);
    }

    //criando metodo para o botão gerar um número aleatório
    public void btnGerarOnClick(View view) {
        //obj gerador da classe Random, declarado e instanc na mesma linha
        Random gerador = new Random();
        //declara e instancia a var valor com o metd nextInt (da classe Random)
        // e atribuiu o limite de 100000 (de 0 a 999999)
        int valor = gerador.nextInt(100000);

        //Atribuindo o número gerado a caixa de texto:::::
        //usando a classe String com o metodo format para transf a variavel valor
        // em uma string que será..
        String s = String.format("%d", valor);
        // ..atribuida ao txt gerado
        //Por conta da var valor ser do tipo int, se tentasse fazer o setText na
        // caixa de texto, daria erro, por isso deve-se transf para String
        txtGerado.setText(s);
    }

    //cirando método para transferir o número aleatório do txtGerado para a
    // caixa de textoeditavel edtTranfere
    public void btnTransferirOnClick(View view) {
        //Depois que vai para o txtGerado, vira CharSequence() -> Caixa de texto
        //                                                  sempre vai ter texto
        //getText() retorna um CharSequence que tem uma String dentro dele e
        // deve-se então transf para String com o toString()
        String s = txtGerado.getText().toString();
        if (s != "") {
            //criar, instancia e linka o obj da Classe EditText
            EditText edtTransfere = findViewById(R.id.edtTransfere);
            edtTransfere.setText(txtGerado.getText().toString());
        }
    }

    //metodo para checar se o número é par ou impar
    public void btnParidadeOnClick(View view) {
        //capturar o conteudo de edtTransfere
        String s = edtTransfere.getText().toString();
        //comando de tratamento de excessos, vai tentar exec cod e se
        //ocorrer erro, realizará tratamento
        try {
            //Classe Integer serve para modelar números inteiros que vao ser
            //tratados como objetos para serem usados em ArrayList e conversoes
            //parseInt é um met que converte String para Inteiros
            //no caso, esse codigo está protegido, pois se não houver número inteiro
            //ocorrerá um tratamento de erro
            int valor = Integer.parseInt(s);
            //Número que era caracter foi transf em string (l102) e agora em Inteiro (l111)
            // agora será testado nesse if para ver paridade
            if (valor % 2 == 0)
                txtParidade.setText(String.format("%d é Par", valor));
            else
                txtParidade.setText(String.format("%d é Ímpar", valor));
        }
        catch (Exception e) {
            Toast.makeText(this, "É necessário fornecer um número inteiro.", Toast.LENGTH_SHORT).show();
        }
    }

    //botao/metodo para checar se é primo
    public void btnPrimoOnClick(View view) {
        String s = edtTransfere.getText().toString();
        try {
            int valor = Integer.parseInt(s);
            //mesma coisa do teste de paridade só que agr desvia para o met
            // que checa se é primo
            if (ePrimo(valor))
                txtPrimo.setText(String.format("%d é Primo", valor));
            else
                txtPrimo.setText(String.format("%d não é Primo", valor));
        }
        catch (Exception e) {
            Toast.makeText(this, "É necessário fornecer um número inteiro.", Toast.LENGTH_SHORT).show();
        }
    }

    //metodo privado para checar se é primo
    private boolean ePrimo (int pN) {
        int i;
        int r = 1;
        double raiz;
        if (pN == 2)
            return(true);
        else if (pN % 2 == 0)
            return(false);
        else {
            raiz = Math.sqrt(pN);
            i = 3;
            while (i <= raiz && r != 0) {
                r = pN % i;
                i += 2;
            }
            return(r != 0);
        }
    }

    public void txtDivisoresOnClick(View view) {
        String s = edtTransfere.getText().toString();
        try {
            int valor = Integer.parseInt(s);
            //mesma coisa que os outros dois so que agr chama metodo produzDivisores
            s = produzDivisores(valor);
            txtDivisores.setText(s);
            //metodo para subir o rolamento se a Activity reiniciar (rodar tela)
            txtDivisores.scrollTo(0, 0);
        }
        catch (Exception e) {
            Toast.makeText(this, "É necessário fornecer um número inteiro.", Toast.LENGTH_SHORT).show();
        }
    }

    //metodo para testar e produzir divisores
    private String produzDivisores(int valor) {
        int i;
        double fim;
        String s = "";
        //nenhum número tem divisores maior que a metade dele mesmo
        fim = valor / 2;
        i = 2;
        while (i <= fim) {
            if (valor % i == 0)
                s = s + i + "\n";
            i++;
        }
        return(s);
    }

    //limpando os conteudos e botoes
    public void btnLimpaTudo(View view) {
        //obj v da classe TextView
        TextView v;
        /*Poderia ter feito:
        * txtGerado.setText("")
        */
        v = findViewById(R.id.txtGerado);
        v.setText("");
        v = findViewById(R.id.txtParidade);
        v.setText("");
        v = findViewById(R.id.txtPrimo);
        v.setText("");
        v = findViewById(R.id.txtDivisores);
        v.setText("");
        //não precisa fazer:
        //EditText e;
        //e = findViewById(R.id.edtTranfesre);
        //pois o EditText extende o TextView, unica dif é que permite a alteraçao
        //de texto pelo teclado
        v = findViewById(R.id.edtTransfere);
        v.setText("");
    }
}