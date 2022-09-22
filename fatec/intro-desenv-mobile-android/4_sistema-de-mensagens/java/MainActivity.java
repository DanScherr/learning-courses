package com.semestre1.osistemademensagens;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    EditText edtTitulo;
    EditText edtMensagem;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        edtTitulo = findViewById(R.id.edtTitulo);
        edtMensagem = findViewById(R.id.edtMensagem);
    }

    //
    public void btnIniciaIntentOnClick(View view) {
        // criar e instanciar um objeto da Classe Intent para passar como
        // parametro para a função startActivity

        //Está se iniciando do modo explicito:
        // direciona qual classe deve ser chama (obriga o android)
        // this aponta pra quem chama (main activity que da o startActivity)
        // RecebeIntent é quem é chamado

        //Ou seja, desvia dessa tela mainActivity para a RecebeIntent
        // Context packageContext, Class<?> cls
        Intent intent = new Intent(this, RecebeIntent.class);

        //Isso é o extra para disparar uma mensagem que está
        // no arquivo String.xml
        // metodo putExtra é para passar informação de um
        // estado para outro
        //Desse lado é o putExtra(), do outro, getStringExtra()
        //Extra_MSG é a chave de envio do dado, e o dado é a
        // mensagem capturada do edtMensagem e traduzida para
        // o formato de String
        //O primeiro parametro é referencia à constante criada na classe da Activity
        // RecebeIntent, que irá receber
        // a msg do segundo parâmetro (o que será passado de conteudo),
        // que no caso é o conteudo dos campos de txt, objs ja criados a cima
        intent.putExtra(RecebeIntent.EXTRA_MSG, edtMensagem.getText().toString());
        intent.putExtra(RecebeIntent.EXTRA_ASSUNTO, edtTitulo.getText().toString());

        //passa o objeto intent para função startActivity que
        // dispara o mecanismo de intents do android, transferindo
        // a responsabilidade para o android ver o que fazer
        // se voce desviar o app para essa intent, fechá-lo
        // indo para a tela principal e depois reabrir o app
        // ele voltará para a ultima intent aberta pois ele cria
        // camadas e também sabe o caminho de volta pois cria
        // um sistema de pilha de janelas (que também pode ser quebrada)
        // o obj intent guarda para si tanto a informação
        // de quem está disparando quanto de quem está recebendo
        // por isso consegue fazer isso tudo, que nem o dicionário
        // bundle da aula passada cursos fatec
        startActivity(intent);
    }

    //metodo do botão envia geral com intent implicito para enviar dados a algum
    // outro aplicativo que irá, a partir dos parametros que voce colocar, usa-los
    public void btnEnviaGeralOnClick(View view) {
        //declarando obj implicito, que se coloca como parametro uma ação de uma Intent
        Intent intent = new Intent(Intent.ACTION_SEND);
        //Configurando o tipo de info da ação disparada como texto sem formatação "text/plain"
        // esse par ação com o tipo é o que define o que o android vai esoclher
        // para dar o devido tratamento ao pedido
        intent.setType("text/plain");
        //Enviando os dados, porém o parametro de chave deve ser da classe Intent padronizada
        // pelo android e que qualquer outro app ou Activity podem importar por ser padrão, não precisa adivinhar
        intent.putExtra(Intent.EXTRA_TEXT, edtMensagem.getText().toString());
        intent.putExtra(Intent.EXTRA_SUBJECT, edtTitulo.getText().toString());
        //Método resolveActivity pode retornar nulo ou dif de nulo
        //Este if é para se caso o Android n achar alguem para processar essa Activity
        // e ai a intent ficaria no ar (metodo de uso reativo)
        if (intent.resolveActivity(getPackageManager()) != null)
            startActivity(intent);
    }

    //Botao que escolhe um processador fixo para processar o dado enviado
    public void btnSempreEscolheOnClick(View view) {
        //Constroi-se uma primeira Intent e abre a tela de escolha da segunda Intent
        // para dar start a essa segunda intent
        Intent intent = new Intent(Intent.ACTION_SEND);
        intent.setType("text/plain");
        intent.putExtra(Intent.EXTRA_TEXT, edtMensagem.getText().toString());
        intent.putExtra(Intent.EXTRA_SUBJECT, edtTitulo.getText().toString());
        String tituloEscolha = getString(R.string.lblcxescolha);
        //outro intent criado com o primeiro passado como parametro, para usar
        // o metodo createChooser para se escolher qual aplicativo irá receber a mensagem
        // por isso o segundo parametro recebe a variável tituloEscolha
        Intent intentEscolhido = Intent.createChooser(intent, tituloEscolha);
        if (intent.resolveActivity(getPackageManager()) != null)
            startActivity(intentEscolhido);
    }

    //codigo para enviar para o whatsapp
    public void btnEnviaWhatsAppOnClick(View view) {
        //Metodo getPackageManager() da api do android que faz a criação de objetos
        // dessa classe que faz gerenciamento de pacotes
        //Pacote é um app instalado no seu dispositivo
        PackageManager pm = getPackageManager();
        try {
            Intent intent = new Intent(Intent.ACTION_SEND);
            intent.setType("text/plain");
            intent.putExtra(Intent.EXTRA_TEXT, edtMensagem.getText().toString());
            intent.putExtra(Intent.EXTRA_SUBJECT, edtTitulo.getText().toString());

            //Unica linha possivel no try que pode dar erro e desviar pro catch, por
            // isso precisa vir antes do startActivity(intent)
            //Checa se existe o app (whatsapp) no dispositivo e captura as informações a respeito dele
            // atribuindo a variável info criada do tipo PackageInfo
            //Faz-se isso apenas para verificar se o pacote existe (app instalado).
            // se não estiver desvia para o bloco catch
            //Parametros:
            //    primeiro: *packagename localizar no aparelho o app whatsapp (só pesquisar o packagename no google)
            //    segundo: GET_META_DATA passa o sobre do app
            PackageInfo info = pm.getPackageInfo("com.whatsapp", PackageManager.GET_META_DATA);

            //Desvia para abrir no whatsapp como o gerenciamento de pacotes, pq o whatsapp
            // tem no seu app um intent filter para tratar esse envio
            intent.setPackage("com.whatsapp");
            startActivity(intent);
        }

        //Desvio reativo para saber se o dispositivo encontrou ou nao o whatsapp no aparelho
        catch (PackageManager.NameNotFoundException e) {
            Toast.makeText(this, R.string.errowhatsapp, Toast.LENGTH_SHORT).show();
        }
    }

    //codigo para enviar para o googledocs
    public void btnEnviaGoogleDocsOnClick(View view) {
        PackageManager pm = getPackageManager();
        try {
            Intent intent = new Intent(Intent.ACTION_SEND);
            intent.setType("text/plain");
            intent.putExtra(Intent.EXTRA_TEXT, edtMensagem.getText().toString());
            intent.putExtra(Intent.EXTRA_SUBJECT, edtTitulo.getText().toString() + ".txt");

            // Verifica se o pacote existe (app instalado). Se não estiver desvia para o bloco catch
            PackageInfo info = pm.getPackageInfo("com.google.android.apps.docs", PackageManager.GET_META_DATA);
            intent.setPackage("com.google.android.apps.docs");
            startActivity(intent);
        }
        catch (PackageManager.NameNotFoundException e) {
            Toast.makeText(this, R.string.errogoogledocs, Toast.LENGTH_SHORT).show();
        }
    }
}