import React, {useEffect, createRef} from "react";
import { PostcodeLookup } from "@ideal-postcodes/postcode-lookup";
import FeatherIcon from "feather-icons-react"

function Form2({ 
  register,  
  watch,
  errors,
  defaultValues,
  shouldDisplay
}) {

  const PostcodeLookupComponent = (props) => {
    const context = createRef();
  
    useEffect(() => {
      PostcodeLookup.setup({
        apiKey: "ak_ktcybmknJKLTcXkHm11Z8JDhdMvyG",
        context: context.current,
        outputFields: {
              line_1: '#address_line1',  
              line_2: '#address_line2',         
              line_3: '#address_line3',
              post_town: '#post_town',
             postcode: '#postcode'
           },
        buttonStyle: {
          backgroundColor: "green",
          color: "white"
        },
        ...props
      });
    }, []);
  
    return <div ref={context}></div>;
  };



  return (

    <div style={{ display: shouldDisplay ? "block" : "none" }}>

        <h3 className="text-blue-dark mb-1">Please provide your details.</h3> 
        <p>This is so we can find your bank account with the lenders.</p>      

        <hr/>
        
          <div className="form-group flex grid grid-cols-none grid-rows-none md:grid-cols-2 md:grid-rows-1 gap-4 md:gap-x-20">

            <div>

              <div className="mt-2">
                <label htmlFor="title" class="mr-2">Title:</label> <br />
                <select name="title"  {...register("title", { required: true } )}   >
                  <option value="..."></option>                  
                  <option value="mr">Mr</option>
                  <option value="mrs">Mrs</option>
                  <option value="miss">Miss</option>
                </select>
              </div>            

              <div className="mt-2">
                <label htmlFor="name" class="mr-2">First Name:</label>
                <input
                  type="text"
                  id="firstName"                
                  name="firstName"
                  placeholder="Enter your first name"  
                  defaultValue={defaultValues && defaultValues.firstName}
                  {...register("firstName", { required: true, maxLength: 20 })}       
                /> 
                {errors.firstName?.type === 'required' && <p class="errors mt-2"><FeatherIcon icon="alert-triangle" className="mr-2" />A first name is required</p>}
              </div>

              <div className="mt-2">
                <label htmlFor="lastName" class="mr-2">Last Name:</label>
                <input
                  type="text"
                  id="lastName"                
                  name="lastName"
                  placeholder="Enter your last name"   
                  defaultValue={defaultValues && defaultValues.lastName}
                  {...register("lastName", { required: true } )}              
                />  
                {errors.lastName?.type === 'required' && <p class="errors mt-2"><FeatherIcon icon="alert-triangle" className="mr-2" />A last name is required</p>}
              </div>    

              <div className="mt-2">
                <label htmlFor="dob"  class="mr-2">Date of Birth:</label>
                <input   
                  type="date"
                  id="dob"                
                  name="dob" 
                  placeholder="dd/mm/yyyy"                    
                  defaultValue={defaultValues && defaultValues.dob}
                  {...register("dob", { required: true } )}                                     
                />  
                {errors.dob?.type === 'required' && <p class="errors mt-2"><FeatherIcon icon="alert-triangle" className="mr-2" />
                A date of birth is required</p>}
              </div>   

            </div>  

            <div>
                <PostcodeLookupComponent/>

                <div className="mt-4">  
                  <label htmlFor="address_line1" class="mr-2">Address 1:</label>
                  <input
                    type="text"
                    id="address_line1"
                    name="address_line1"
                    {...register("address_line1", { required: true } )}   
                    
                  />
                {errors.address_line1?.type === 'required' && <p class="errors mt-2"><FeatherIcon icon="alert-triangle" className="mr-2" />
                Please add the first line of your address</p>}                  
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Address 2:</label>
                  <input
                    type="text"
                    id="address_line2"
                    name="address_line2"
                    {...register("address_line2", { required: true } )}     
                  />
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Address 3:</label>
                  <input
                    type="text"
                    id="address_line3"
                    name="address_line3"
                    {...register("address_line3", { required: true } )}   
                  />
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Town:</label>
                  <input
                    type="text"
                    id="post_town"
                    name="post_town"
                    {...register("post_town", { required: true } )}     
                  />
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Postcode:</label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    {...register("postcode", { required: true } )}   
                  />
                {errors.postcode?.type === 'required' && <p class="errors mt-2"><FeatherIcon icon="alert-triangle" className="mr-2" />
                Please add your postcode</p>}                         
                </div>
                
                  <div>

              </div>
            </div>          
          </div>
    </div>
  );
}
export default Form2;
