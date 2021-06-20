import React from 'react';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { useAlert } from 'react-alert'

const FavCard = (props) => {
  const alert = useAlert()
    return (
        <div style={{margin:"15px 0px"}}>
              <div>
                <div key={props.index}>
                    <Typography component="h6" variant="h6">
                      {props.element.author===null?"Himanshu":props.element.author}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {props.element.text}
                    </Typography>
                        <Rating
                            name="simple-controlled"
                            value={props.element.value}
                            onChange={()=> alert.show('sorry, the rating can not be updated',{type:'error'})}
                        />
                </div>
              </div>
          </div>
    )
}

export default FavCard
