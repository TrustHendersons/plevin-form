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
              line_1: '#prevAddress_line1',  
              line_2: '#prevAddress_line2',         
              line_3: '#prevAddress_line3',
              post_town: '#prev_post_town',
             postcode: '#prev_postcode'
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

        <h3 className="text-blue-dark mb-1">Previous Address</h3> 
        <p>If you lived at a different address when you held the PPI, please enter it below. If your address was the same as it is now, just click Next.</p>     

                <hr/> 

          <div className="form-group flex grid grid-cols-none grid-rows-none md:grid-cols-2 md:grid-rows-1 gap-4 md:gap-x-20">

            <div>
                <PostcodeLookupComponent className="mt-4"/>
            </div>

            <div>
                <div>  
                  <label class="mr-2">Address 1:</label>
                  <input
                    type="text"
                    id="prevAddress_line1"
                    name="prevAddress_line1"
                    {...register("prevAddress_line1" )}   
                    
                  />               
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Address 2:</label>
                  <input
                    type="text"
                    id="prevAddress_line2"
                    name="prevAddress_line2"
                    {...register("prevAddress_line2" )}     
                  />
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Address 3:</label>
                  <input
                    type="text"
                    id="prevAddress_line3"
                    name="prevAddress_line3"
                    {...register("prevAddress_line3" )}   
                  />
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Town:</label>
                  <input
                    type="text"
                    id="prev_post_town"
                    name="prev_post_town"
                    {...register("prev_post_town" )}     
                  />
                </div>

                <div className="mt-4">  
                  <label class="mr-2">Postcode:</label>
                  <input
                    type="text"
                    id="prev_postcode"
                    name="prev_postcode"
                    {...register("prev_postcode" )}   
                  />                       
                </div>
                
                  <div>

              </div>
            </div>          
    
          </div>
    </div>
  );
}
export default Form2;
