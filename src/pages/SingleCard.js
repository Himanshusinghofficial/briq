import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addfav, addsimilarity } from '../actions/fetchdata';
import StarRatings from 'react-star-ratings';
import stringSimilarity from 'string-similarity';
import { useAlert } from 'react-alert'

const SingleCard = (props) => {
    const alert = useAlert()
    const dispatch = useDispatch();
    // const [rating, setrating] = useState(0);
    const posts = useSelector((state) => state.data.apidata);

    const changeRating = ( newRating, name ) => {
      //  setrating(newRating);
       dispatch(addfav(props.element.author,props.element.text,newRating))
       if(newRating<=3){
        let stringdata = [];
        posts.map(element=>(
          //  console.log(element.text)
           stringdata.push({comval:stringSimilarity.compareTwoStrings(props.element.text,element.text),objval:{text:element.text,author:element.author}})
         ))
       dispatch(addsimilarity(stringdata.sort(function(a,b){
        return a.comval-b.comval;
      })))
      alert.show('low rated, filtering famous quotes for you',{type:'info'})
       }
       if(newRating>3){
        let stringdata = [];
        posts.map(element=>(
          //  console.log(element.text)
           stringdata.push({comval:stringSimilarity.compareTwoStrings(props.element.text,element.text),objval:{text:element.text,author:element.author}})
         ))
       dispatch(addsimilarity(stringdata.sort(function(a,b){
        return b.comval-a.comval;
      })))
      alert.show('high rated, filtering similar quotes for you',{type:'success'})
      }
      //  console.log(stringdata.sort(function(a,b){
      //    return b.comval-a.comval;
      //  }));
    }
  //  console.log(props.element)
    return (
        <div style={{margin:"15px 0px"}}>
              <div>
                <div key={props.index}>
                    <Typography component="h6" variant="h6">
                      {(props.element.author===null||props.element.author===undefined)?"Himanshu":props.element.author}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {props.element.text}
                    </Typography>
                        <StarRatings
                            // rating={rating}
                            starRatedColor="#fca503"
                            changeRating={changeRating}
                            numberOfStars={5}
                            name='rating'
                            starHoverColor="#fca503"
                            starDimension="20px"
                            starSpacing="1px"
                          />
                </div>
              </div>
          </div>
    )
}

export default SingleCard
