package com.semestre1.registrodemensagens;

import androidx.appcompat.app.AppCompatActivity;
 //androidx é um novo pacote de android lançados recentementes
import android.os.Bundle;
import android.text.method.ScrollingMovementMethod;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    /*
    * Classe pública de nome MainActivity, classe que representa
    * a página principal e todas suas funcionalidades (cada pág tem uma)
    * extends -> herda os atributos disponíveis de AppCompatActivity,
    * que estão sendo importados
    */
    private ArrayList<String> strRegistro;
    //declarar dentro da classe para que o objeto fique disponível
    //em toda execução da Activity, não só dentro de métodos como obj local
    //Assim, só é necessário instanciar dentro dos métodos
    private EditText edtMensagem;
    private TextView txtRegistros;
    //são todos private para q sejam acessados apenas a esta Activity (tela).


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        //metodo onCreate = executado sempre q a Activity começa ***(ciclodevida)***
        // parametros: 1º: classe: Bundle -> ; 2º parametro com qlqr nome -> por padrão savedInstanceState
        //serve para salvar os dados q podem ser perdidos ao mudar de activity ou geometria de tela (activity e destruida e criada novamente)
        super.onCreate(savedInstanceState);
        //precisa chamar o onCreate da superclasse (superiores) para usar o onCreate na main sobrescrito
        setContentView(R.layout.activity_main);
        //activity_main -> nosso layout
        //setContentView, comando q permite o android estabelecer o vinculo desse arq java
        //com o arq do layout.

        strRegistro = new ArrayList<>();
        //programação java, construir de forma normal
        edtMensagem = findViewById(R.id.edtMensagem);
        //construindo os obj declarados na classe com o findViewById do android e o arq R
        txtRegistros = findViewById(R.id.txtRegistros);

        txtRegistros.setMovementMethod(new ScrollingMovementMethod());
        //configura qnd o componente se comporta qnd seu conteudo ocupa uma area
        //maior do que seu layout.
        /*ScrollingMovementMethod descer = new ScrollingMovementMethod();
        txtRegistros.setMovementMethod(descer);*/
    }

    public void btnRegistraOnClick(View view){
        //obj view da classe View passado como parametro (poderia ser qlqr nome)
        String msg;
        msg = edtMensagem.getText().toString();
        //obj edtMensagem declarado na classe, construido no onCreate
        //e agora está sendo usado para iniciar a variável msg
        if( msg != null && !msg.isEmpty() ) {
            strRegistro.add(msg);
            //Carregando a string no obj strRegistro que está linkado ao campo
            edtMensagem.setText("");
            //limpa o campo do edtMensagem e coloca o ultimo parametro passado
            //nesse caso = " "

            exibeRegistro();
            //chamando o metodo
        }
    }

    private void exibeRegistro(){
        String s = "";
        for ( int i=0; i<strRegistro.size(); i++ ) {
            if ( i<strRegistro.size()-1 )
                s = s + ( i+1 ) + ": " + strRegistro.get( i ).toString() + "\n";
            else
                s = s + ( i+1 ) + ": " + strRegistro.get( i ).toString();
        }
        txtRegistros.setText(s);
    }
}