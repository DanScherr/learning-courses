import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import CatalogContext from '../../../context/data/catalog/CatalogContext';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export default function SearchInput() {

    /** Contexto */
    const {initialMockup, setBookId} = useContext(CatalogContext)
    
    useEffect(() => {
      const listener = event => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
          console.log("Enter key was pressed. Run your function.");
          event.preventDefault();
          let titulo = document.getElementById('free-solo-2-demo').value
          navegarParaLivro(titulo)
        }
      };
      document.addEventListener("keydown", listener);
      return () => {
        document.removeEventListener("keydown", listener);
      };
    }, []);

    const navigate = useNavigate();
    const navegarParaLivro = ((titulo) => {
      let livro = livros.filter((l) => l.titulo === titulo)
      console.log('titulo:', titulo)
      console.log('id do livro selecionado:', livro)
      if (livro.length > 0) {
        setBookId(livro[0].id)
      } else
        setBookId(livro.id)
      navigate('/book')
    })

    /** Search */
    let livros = []
    const livrosSearch = (() => {
      initialMockup.catalogo.forEach((categoria) => (
          categoria.books.forEach((book) => (
              livros.push({
                titulo: book.titulo,
                id: book.id
              })
          ))
      ))
      let nomeLivros = livros.map((livro) => livro.titulo)
      return nomeLivros;
    })

    return (
      <Stack spacing={2} sx={{ width: 200 }}>
        <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={livrosSearch()}
            renderInput={(params) => (
            <TextField
              id='searchBox_id'
                {...params}
                label="Search input"
                InputProps={{
                ...params.InputProps,
                type: 'search',
                
                }}
            />
            )}
        />
    </Stack>
    )
}