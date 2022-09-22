package com.semestre1.cursosfatecs;

import java.util.ArrayList;


//deve ser importado no MainActivity
public class CursosFatec {

    //cria um metodo do tipo ArrayList<String> recebendo um parametro que é o
    // nome do curso *cursoEscolhido
    // retornando Strings de um Array
    ArrayList<String> getFatecs(String curso) {
        //criando e instanciando obj de lista
        ArrayList<String> fatecs = new ArrayList();
        if (curso.equals("Análise e Desenvolvimento de Sistemas")) {
            fatecs.add("Americana");
            fatecs.add("Araçatuba");
            fatecs.add("Campinas");
            fatecs.add("Carapicuíba");
            fatecs.add("Cruzeiro");
            fatecs.add("Ferraz de Vasconcelos");
            fatecs.add("Franca");
            fatecs.add("Ipiranga");
            fatecs.add("Jales");
            fatecs.add("Jundiaí");
            fatecs.add("São Caetano do Sul");
            fatecs.add("São Paulo");
        }
        else if (curso.equals("Jogos Digitais")) {
            fatecs.add("Americana");
            fatecs.add("Carapicuíba");
            fatecs.add("Ourinhos");
            fatecs.add("São Caetano do Sul");
        }
        else if (curso.equals("Segurança da Informação")) {
            fatecs.add("Americana");
            fatecs.add("Ourinhos");
            fatecs.add("São Caetano do Sul");
        }
        else if (curso.equals("Gestão Comercial")) {
            fatecs.add("Adamantina");
            fatecs.add("Araraquara");
            fatecs.add("Assis");
            fatecs.add("Guaratinguetá");
            fatecs.add("Itaquaquecetuba");
            fatecs.add("Santana de Parnaíba");
            fatecs.add("São Roque");
        }
        else if (curso.equals("Comércio Exterior")) {
            fatecs.add("Barueri");
            fatecs.add("Indaiatuba");
            fatecs.add("Itapetininga");
            fatecs.add("Praia Grande");
            fatecs.add("Santo André");
            fatecs.add("São Caetano do Sul");
        }
        else {
            fatecs.add("{curso não encontrado}");
        }
        //retorna um ArrayList
        return(fatecs);
    }
}
