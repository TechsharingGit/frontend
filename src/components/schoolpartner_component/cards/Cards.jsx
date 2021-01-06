import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import Pagination from '../pagination/Pagination';


const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      margin:"10px"
 
    },
    gridContainer: {
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop:"50px"
      },
    media: {
      height: 140,
    },
    newcard :{
        display:"flex",
        position : "absolute",
        // right:"10px"
       
    }
  });

const Cards = (props) => {
    const classes = useStyles();

    const [showPerPage, setShowPerPage] = React.useState(8);
    const [pagination,setPagination] = React.useState({
      start:0,
      end:showPerPage,
    });
    props.details.map(dt => console.log(dt.imageUrl));
 
    const filtermap=props.details.filter(detail => detail.year.toString().includes(props.data) && detail.city.includes(props.city) && detail.title.toLowerCase().includes(props.nameinput.toLowerCase()) );
    // const filtermap=details.filter(detail => detail.city.includes(city) && detail.title.toLowerCase().includes(nameinput.toLowerCase()) );


    const onPaginationChange = (start,end) => {
      setPagination({start:start,end:end})
    }

    return (
    //   <div className={classes.newcard}>
    <>
      <Grid
      container
      spacing={2}
      className={classes.gridContainer}
    //   justify="center"
    >
      {filtermap.slice(pagination.start,pagination.end).map((detail) => (
        <Grid item xs={12} sm={6} md={3}> 
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={detail.imageUrl}
            // title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {detail.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {detail.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
            Share
          </Button> */}
          <Typography variant="body1" color="primary" component="p">
              Place:
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
              {detail.city}
          </Typography>
          <Typography variant="body1" color="primary" component="p">
            Date:
          </Typography>

          <Typography variant="body1" color="textSecondary" component="p">
              {detail.registeredDt.substr(0, 10)}
          </Typography>

          {/* <Button size="small" color="primary">
            Learn More
          </Button> */}
        </CardActions>
      </Card>
      </Grid>
      ))}
      
      </Grid>
      <Pagination showPerPage={showPerPage}
                  onPaginationChange={onPaginationChange}
                  total={filtermap.length}
      />
      
      </>
    );
}


export default Cards
