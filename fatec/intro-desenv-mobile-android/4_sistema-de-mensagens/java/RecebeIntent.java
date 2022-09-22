package com.semestre1.osistemademensagens;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

public class RecebeIntent extends AppCompatActivity {
    //Constantes criadas para ser passada como argumento para recuperar o String
    //Deve ter os 3 respectivos modificadores de acesso publico para
    // que todo mundo enxergue, final, para que não se possa extendê-lo, portanto,
    //  não se pode modifica-lo, tornando-a constante
    public static final String EXTRA_MSG = "msg";
    public static final String EXTRA_ASSUNTO = "assunto";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_recebe_intent);
        //obj intent do lado recebedor para receber msg
        // só que não se constroi o obj com o new Intent()
        // pois ele precisa receber uma intent que já exista
        // para isso, utiliza-se o método getIntent(), para
        // receber a intent disparada pela outra Activity
        // e o par chave valor
        Intent intent = getIntent();

        //getStringExtra(), método para receber o dado enviado pela
        // outra Activity. O tipo do dado fica no meio do
        // método de resgate
        //Como parametro, recebe a chave usada que foi enviada
        // pela outra Activity através de uma Intent
        //Ai para isso se armazena esse dado em uma variavel
        // criada localmente do tipo String que extrai o dado da
        // intent
        String msg = intent.getStringExtra(EXTRA_MSG);
        String titulo = intent.getStringExtra(EXTRA_ASSUNTO);
        //Captura o campo de mensagem construindo o obj da classe TextView
        TextView txtMensagem = findViewById(R.id.txtMensagem);
        // seta o a msg. E mesma coisa pro titulo
        txtMensagem.setText(msg);
        TextView txtTitulo = findViewById(R.id.txtTitulo);
        txtTitulo.setText(titulo);
    }
}