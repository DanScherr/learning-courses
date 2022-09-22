package com.semestre1.trabalhandocomimagens;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.Spinner;
import android.widget.Switch;

import java.util.Random;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    //parametro view diz quem chamou o método para ser vinculado (btn pqno
    // medio ou grande). Isso é implementado no if com o view.getId().
    public void btnTamImagem(View view) {
        //criando obj da classe ImageView para usar o setImageResource nos ifs
        ImageView imgExemplo = findViewById(R.id.imgExemplo);
        //switch para saber se imgs serão verticais ou horizontais.
        Switch swtImgVerticais = findViewById(R.id.swtImgVerticais);
        if (view.getId() == R.id.btnTamPeq)
            //checando se switch está ligado e alterando a img mostrada
            if (swtImgVerticais.isChecked())
                imgExemplo.setImageResource(R.drawable.imgv150x300);
            else
                imgExemplo.setImageResource(R.drawable.img300x150);
        if (view.getId() == R.id.btnTamMed)
            if (swtImgVerticais.isChecked())
                imgExemplo.setImageResource(R.drawable.imgv300x600);
            else
                imgExemplo.setImageResource(R.drawable.img600x300);
        if (view.getId() == R.id.btnTamGde)
            if (swtImgVerticais.isChecked())
                imgExemplo.setImageResource(R.drawable.imgv600x1200);
            else
                imgExemplo.setImageResource(R.drawable.img1200x600);
    }

    //ao clicar no switch, aleatoriamente muda a img pro carinha do android
    public void swtImgVerticaisOnClick(View view) {
        ImageView imgExemplo = findViewById(R.id.imgExemplo);
        //cria obj random que vai de 0 até 1
        Random gerador = new Random();
        int opc = gerador.nextInt(2);
        if (opc == 0)
            imgExemplo.setImageResource(R.drawable.android120x120);
        else
            imgExemplo.setImageResource(R.drawable.android600x600);
    }

    //ao ativar o switch o divider de background some
    public void swtEspOcupadoOnClick(View view) {
        View dividerImg = findViewById(R.id.dividerImg);
        Switch swtEspOcupado = findViewById(R.id.swtEspOcupado);
        if (swtEspOcupado.isChecked())
            //setVisibility -> torna visivel ou invisel e gone (nao ocupa mais espaço)
            dividerImg.setVisibility(View.VISIBLE);
        else
            dividerImg.setVisibility(View.INVISIBLE);
    }

    //troca de escala com o botao spinner atralado as Strings @array
    public void btnTrocaOpcaoOnClick(View view) {
        Spinner spnOpcoes = findViewById(R.id.spnOpcoes);
        ImageView imgExemplo = findViewById(R.id.imgExemplo);
        //getSelectedItemPosition que pega a posição relativa (cada String tem sua posição
        if (spnOpcoes.getSelectedItemPosition() == 0)
            //setScaleType -> altera a escala
            imgExemplo.setScaleType(ImageView.ScaleType.CENTER_INSIDE);
        else if (spnOpcoes.getSelectedItemPosition() == 1)
            imgExemplo.setScaleType(ImageView.ScaleType.FIT_START);
        else if (spnOpcoes.getSelectedItemPosition() == 2)
            imgExemplo.setScaleType(ImageView.ScaleType.FIT_END);
        else if (spnOpcoes.getSelectedItemPosition() == 3)
            imgExemplo.setScaleType(ImageView.ScaleType.CENTER);
        else if (spnOpcoes.getSelectedItemPosition() == 4) {
            // Não usado. É necessário configurar um objeto da classe Matrix que fará a transformação da imagem.
            //imgExemplo.setScaleType(ImageView.ScaleType.MATRIX);
        }
        else if (spnOpcoes.getSelectedItemPosition() == 5)
            imgExemplo.setScaleType(ImageView.ScaleType.FIT_XY);
        else if (spnOpcoes.getSelectedItemPosition() == 6)
            imgExemplo.setScaleType(ImageView.ScaleType.FIT_CENTER);
        else if (spnOpcoes.getSelectedItemPosition() == 7)
            imgExemplo.setScaleType(ImageView.ScaleType.CENTER_CROP);
    }
}