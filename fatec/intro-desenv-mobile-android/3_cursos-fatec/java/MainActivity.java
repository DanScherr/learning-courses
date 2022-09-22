package com.semestre1.cursosfatecs;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.text.method.ScrollingMovementMethod;
import android.view.View;
import android.widget.Spinner;
import android.widget.TextView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {
    private CursosFatec buscaFatecs;
    private Spinner spnCursos;
    private TextView txtFatecs;
    String cursoEscolhido;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        buscaFatecs = new CursosFatec();
        spnCursos = findViewById(R.id.spnCursos);
        txtFatecs = findViewById(R.id.txtFatecs);
        txtFatecs.setMovementMethod(new ScrollingMovementMethod());
    }

    //salvar o que importa na activity e que precisa ser mantida, recebe obj da classe Bundle
    protected void onSaveInstanceState(Bundle savedInstanceState) {
        //necessario fazer chamada de superclasse com o mesmo parametro pois
        // estamos criando a nossa versão do méotodo já existente,
        // não precisa declarar o nome da classe pois ela ja foi declarada
        // no método
        super.onSaveInstanceState(savedInstanceState);
        //usando metodo putString para colocar uma String no dicionario Bundle
        // esse método exige parametro do tipo chave-valor (chave é smp String)
        // dessa forma se salva o estado
        // nesse app a informação chave que se tem  para resgatar
        // é o nome do curso escolhido (variável do tipo String)
        savedInstanceState.putString("curso", cursoEscolhido);
    }

    //restaurar o que foi salvo, recebe obj da classe Bundle
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        //resgatando para a var cursoEscolhido, a informação salva no dicionário
        // InstanceState com o método .getString(), passando a chave como param
        cursoEscolhido = savedInstanceState.getString("curso");
        // e depois carregar a lista com o método, melhor usar um método que não
        // tem problema por não receber nenhum parametro (como é no caso de métodos
        // que recebem/dependem de uma view como parametro)
        carregaFatecs();
        //metodo que faz a carga do textView, elemento que deseja-se restaurar
    }

    //1) //metodo para funcionar ao clicar no botao
    public void btnCursoOnClick(View view) {
        //cursoEscolhido é um obj String criado la em cima para armazenar a opção
        // do curso escolhido pelo usuário no botao spnCursos

        //COMO FAZER ISSO?

        //getSelectedItem retorna um obj que foi selecionado no spinner
        // e .toString() irá transformá-lo em texto (serve para capturar obj do arraylist,
        // que ñ tem texto, mas sim uma lista de objetos)
        cursoEscolhido = spnCursos.getSelectedItem().toString();
        // cursoEscolhido = String.valueOf(spnCursos.getSelectedItem()); // esta é
        // uma opção alternativa que utiliza do método .valueOf, que converte valores,
        // para extrair um obj para String

        //chama o método carregaFatecs logo abaixo
        carregaFatecs();
    }

    public void carregaFatecs() {
        //cria uma lista objeto (listaFatecs), inicializa e declara recebendo a lista
        // de resultados do método chamado da classe java criada .getFatecs do
        // obj criado buscaFatecs que é um ArrayList
        ArrayList<String> listaFatecs = buscaFatecs.getFatecs(cursoEscolhido);
        StringBuilder s = new StringBuilder();
        //for é usado para listar item por item (String x) adicionado pelo meotodo
        // getFatecs proveniente ao obj buscaFatec e ir adicionando um a um,
        // pulando linha à String, através do StringBuilder
        for(String x : listaFatecs) {
            s.append("- ");
            s.append(x);
            s.append("\n");
        }

        //toda essa conversão porque não se pode passar como argumento um ArrayList
        // e sim, uma String, para o campo de texto.
        txtFatecs.setText(s);
    }
}