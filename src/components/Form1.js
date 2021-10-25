import React from "react";
import FeatherIcon from "feather-icons-react"

function Form1 ({
  register,
  errors,
  shouldDisplay,
  defaultValues,
}) {


  return (
    <div style={{ display: shouldDisplay ? "block" : "none" }}>

        <h3 className="blue-dark mb-1">Please select <span className="underline">ALL</span> the banks you had PPI with:</h3> 
        <p className="font-lg">(you can select <strong>multiple banks</strong>, this could mean you have more claims)</p>

        <hr className="mt-2"/>
        
        <div className="form-group grid grid-cols-2 md:grid-cols-3 gap-4 align-items-center">

              <div> 
                <label>
                  <input
                    className="mr-2"
                    type="checkbox"
                    name="lenders"
                    value=" Lloyds" 
                    {...register("lenders", { required: true } )}             
                  />                
                <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Lloyds</span></label>                      
              </div>  

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Barclays" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Barclays</span></label>                      
              </div>  

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Barclaycard" 
                      {...register("lenders", { required: true } )}             
                    />
                      <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Barclaycard</span></label>                      
              </div>    

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Natwest" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Natwest</span></label>                      
              </div>   
              
              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" RBS" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />RBS</span></label>                      
              </div>   
              
              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" TSB" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />TSB</span></label>                      
              </div>   

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Halifax" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Halifax</span></label>                      
              </div>    

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Bank of Scotland" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Bank of Scotland</span></label>                      
              </div>     

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" HSBC" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />HSBC</span></label>                      
              </div>   

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Capital One" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Capital One</span></label>                      
              </div>    

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" MBNA" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />MBNA</span></label>                      
              </div>  

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Egg" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Egg</span></label>                      
              </div>  

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Mint" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Mint</span></label>                      
              </div>  

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Clydesdale" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Clydesdale</span></label>                      
              </div>

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Yorkshire" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Yorkshire</span></label>                      
              </div>    

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" M and S" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />M&amp;S Bank</span></label>                      
              </div>   

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Santander" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Santander</span></label>                      
              </div>  
              
              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Alliance" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Alliance</span></label>                      
              </div>                                                        

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Abbey" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Abbey</span></label>                      
              </div>    

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Black Horse" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Black Horse</span></label>                      
              </div>   

              <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Northern Rock" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Northern Rock</span></label>                      
              </div>                    
 
              <div> 
                <label>
                  <input
                      className="mr-2 custom-checkbox"
                      type="checkbox"
                      name="lenders"
                      value=" Coop" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Co-operative Bank</span></label>                      
              </div>  
        </div>
       
        <div className="form-group mt-4">
        <div> 
                <label>
                  <input
                      className="mr-2"
                      type="checkbox"
                      name="lenders"
                      value=" Other" 
                      {...register("lenders", { required: true } )}             
                    />
                  <span><FeatherIcon icon="check-circle" size="16" className="mr-4 mt-1 float-left" />Other</span></label>                      
              </div>  
              <div className="mt-2">
                <input
                  type="text"              
                  name="otherlender"
                  placeholder="Add them here"   
                  defaultValue={defaultValues && defaultValues.otherlender}
                  {...register("otherlender" )}              
                />  
              </div>  
        </div>          
        {errors.lenders?.type === 'required' && <p class="errors mt-4"><FeatherIcon icon="alert-triangle" className="mr-2" />Please choose at least one lender</p>}
        <p className="mt-3"><FeatherIcon icon="alert-triangle" className="float-left mr-2" />Have you ticked every lender you want us to check?</p>
    </div>
  );
}

export default Form1;
