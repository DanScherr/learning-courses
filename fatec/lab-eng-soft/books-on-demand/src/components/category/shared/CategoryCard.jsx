import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookImage from './../../../static/images/category/book_4.png'
import './CategoryCard.css'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import CatalogContext from '../../../context/data/catalog/CatalogContext';
import { Tooltip } from '@mui/material';

export default function CategoryCard( {
    categoria='categoria', title='Titulo', image='not found', desc='Lorem ipsum', id=0
} ) {

    const {setBookId} = useContext(CatalogContext)
    const navigate = useNavigate();
    const navigateToLearnMore = ((id) => {
        setBookId(id);
        navigate('/book')
    })

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140, mt: 3}}
                image={image === 'not found' ? BookImage : image}
                title="book image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                    {categoria}
                </Typography>
                {desc.length > 300 ?
                    <Tooltip title={desc} arrow>
                        <Typography className='descricaoCategoria' variant="body2" color="text.secondary">
                            {desc}
                        </Typography>
                    </Tooltip>
                :
                <Typography className='descricaoCategoria' variant="body2" color="text.secondary">
                    {desc}
                </Typography>
                }
            </CardContent>
            <CardActions>
                <Button onClick={() => navigateToLearnMore(id)} size="small">Read</Button>
            </CardActions>
        </Card>
    )
}