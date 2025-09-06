import PropTypes from 'prop-types';

function ProfileCard({name,age,num,isMember,hobbies}){
   
    const sum =num+1;
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>age: {age}</h2>
            <h2>sum: {sum}</h2>
            <h2>isMember: {isMember?"Yes":"No"}</h2>
            <h3>Hobbies: </h3>
            <ul>
                {hobbies.map((hobby,index)=>{
                    return <li key={index}>{hobby}</li>
                })}
            </ul>
        </div>
    )
}

ProfileCard.propTypes={
name: PropTypes.string,
age: PropTypes.number.isRequired,
isMember: PropTypes.bool.isRequired,
hobbies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ProfileCard;