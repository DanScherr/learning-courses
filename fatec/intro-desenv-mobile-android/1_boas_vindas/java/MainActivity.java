package com.semestre1.boasvindasmanha;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import java.util.Random;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void btnExibeMsgOnClick(View view){
        //é um método q será chamado e pode ter o nome que quiser
        //nesse caso representa o nome do botão mais a ação que ele faz

        int nMsg;
        Random rnd = new Random(); //obj rnd da classe random
        nMsg = rnd.nextInt( 5 ); //usa o metodo nextInt para retorna o número aleatorio entre 0 e 5

        TextView txtMensagem = findViewById(R.id.textMensagem);
        //findViewById, metodo q aponta para o conteudo da caixa de texto com id textMensagem
        //Fica atrelado ao objeto criado com nome que quiser (txtMensagem) da classe TextView
        // do nosso layout (R.id.txtMensagem) - android studio constroi arquivo R com tds os ids
        if (nMsg == 0) txtMensagem.setText("Cara");
        //ao mudar o conteudo do objeto txtMensagem, o android se encarrega de mudar
        //o conteudo da caixa de texto do layout (tela)
        else if (nMsg == 1) txtMensagem.setText("Coroa");
        else if (nMsg == 2) txtMensagem.setText("Cara");
        else if (nMsg == 3) txtMensagem.setText("Coroa");
        else if (nMsg == 4) txtMensagem.setText("Cara");
        else txtMensagem.setText("Coroa");
    }

    public void btnLimpaMsgOnClick(View view){
        TextView txtMensagem = findViewById(R.id.textMensagem);
        txtMensagem.setText("Let's play a game, shall we??");
        //captura elemento de texto e faz o settext
        Toast.makeText(this, "Toss a coin to the Witcher..", Toast.LENGTH_SHORT).show();
        // metodo Toast faz aparecer um balãozinho temporario mostrando msg por alguns segundos e desaparece;
        // Toast é uma classe
        // make.Text constroi um obj da classe toast, passa-se 3 parametros
        // this = ponteiro para um obj de dentro da classe Main (aponta para seu espaço de memoria);
        // significa pra onde voltar o foco --> this --> Main (proprio app);

        //cod em linhas separadas pra entender o que ta rolando
        /*
        * Toast t;   - declarando obj chamado t
        * t = Toast.makeText(this, "", Toast.LENGTH_SHORT);  - construção do obj
        * t.show();  -  mostrar
        * */
    }
}