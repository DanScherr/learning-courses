import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookImage from './../../../static/images/category/book_4.png'

export default function CategoryCard( {
    categoria='categoria', title='Titulo', image='not found', desc='Lorem ipsum'
} ) {
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
                <Typography variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Read</Button>
                <Button size="small" sx={{color:'primary.veryLightMain'}}>Learn More</Button>
            </CardActions>
        </Card>
    )
}