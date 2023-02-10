import React from 'react'

const TestimonialsCard = (props) => {
  return (
    <div>
<h4>* * * * *</h4>
<img src={props.image} alt="profile"/>
<p>{props.name}</p>
<p>{props.testimonials}</p>
    </div>
  )
}

export default TestimonialsCard
