import React, {useState} from "react";
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import Form3 from "../components/Form2a";
import Form4 from "../components/Form3";
import { useForm } from "react-hook-form";
import FeatherIcon from "feather-icons-react"


function MainComponent() {
  const {
    register,
    trigger,
    formState: { errors },
    getValues
  } = useForm({
    mode: "onChange",
    // You can set default values here
    defaultValues: {

    }
  });

  const [defaultValues, setDefaultValues] = useState({});

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const [currentForm, setCurrentForm] = useState(0);

  const forms = [
    {
      fields: ["lenders"],
      component: (register, errors) => (
        <Form1
          key={0}
          shouldDisplay={currentForm === 0}
          defaultValues={defaultValues}
          register={register}
          errors={errors}
        />
      )
    },
    {
      fields: ["title", "firstName", "lastName", "dob", "address_line1", "postcode"],
      component: (register, errors) => (
        <Form2
          key={1}
          shouldDisplay={currentForm === 1}
          defaultValues={defaultValues}
          register={register}  
          errors={errors}         
        />
      )
    },
    {
      fields: ["prevAddress_line1", "prev_postcode"],
      component: (register) => (
        <Form3
          key={2}
          shouldDisplay={currentForm === 2}
          defaultValues={defaultValues}
          register={register}          
        />
      )
    },    
    {
      fields: ["email", "tel", "privacy"],
      component: (register, errors) => (
        <Form4
          key={3}
          shouldDisplay={currentForm === 3}
          register={register}  
          errors={errors}
          values={getValues()}
        />
      )
    },
    /*
      fields: ["email"],
      component: (errors) => (
        <Form5
          key={4}
          shouldDisplay={currentForm === 4}
          errors={errors}
          values={getValues()}
        />
      )
      */ 
  ];

  const moveToPrevious = () => {
      setCurrentForm(currentForm - 1);
  };

  const moveToNext = () => {
    setDefaultValues(prev => ({ ...prev, ...getValues() }));
    trigger(forms[currentForm].fields).then(valid => {
      if (valid) setCurrentForm(currentForm + 1);
    });
  };

  const prevButton = currentForm !== 0;
  const nextButton = currentForm !== forms.length - 1;

  const handleSubmit = e => {
    setDefaultValues(prev => ({ ...prev, ...getValues() }));
    trigger(forms[currentForm].fields).then(valid => {
      if (valid) fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...getValues() })
      })
      .then((response) => {
        navigate("/thank-you/")
      })
    });
  } 

  return (

    <Layout>

      <div className="container">  
        <div className="mx-4 text-center">
        <h1 className="uppercase text-green-500 mb-1 uppercase">Missed the PPI deadline?</h1>
              <h2 className="uppercase text-green-500">PPI claim rejected?</h2>
              <progress max="3" value={currentForm}></progress>
              <p>£billions can be claimed in 'Plevin' cases (also know as PPI2) after a landmark court ruling. 
              <br /><strong>Crucially, the PPI Deadline does NOT apply to these claims!</strong></p>
        </div>  

      <section className="section-form md:shadow w-50">


        <div className="progress">
          <h4 className="steps">Step {currentForm + 1}</h4>
        </div>


        <form
          name="contact"
          method="post"
          action="/thank-you/"  
          data-netlify="true"
          data-netlify-honeypot="bot-field"           
        >  
          <input type="hidden" name="form-name" value="contact" />     
          {forms.map(form => form.component(register, errors, defaultValues))}
        </form>


        <div className="flex justify-between">
          {prevButton && (
            <button
              className="btn-blue"
              type="button"
              onClick={moveToPrevious}
            >
              Back
            </button>
          )}

          {nextButton && (
            <button 
              className="btn-green" 
              type="button" 
              onClick={moveToNext}
            >
              Next
            </button>
          )}

          {currentForm === 3 && (
            <button
              onClick={handleSubmit}
              className="btn-green"
              type="submit"
            >
              Submit
            </button>
          )}
        </div>


      </section>  

      </div>   

      <div className="section-blue">
        <h1 className="col-span-4 text-center">How does the Free Plevin Check work?</h1>
        <div className="w-2/3 mx-auto">
          <hr />
        </div>
    
        <div className="lg:container w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">

          <div>
            <FeatherIcon icon="check" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>
            <p className="text-sm mb-2"><strong>We offer this free check</strong> to assess whether there was an undisclosed commission on a PPI policy that you held, before you decide whether you wish to make a claim.</p>
          </div>

          <div>  
            <FeatherIcon icon="check" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>
            <p className="text-sm mb-2"><strong>This check is completely free of charge</strong> and you are under no obligation to pursue a claim once this free check has been completed.</p>
          </div>  

          <div>  
            <FeatherIcon icon="check" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>          
            <p className="text-sm mb-2"><strong>As part of the free check,</strong> we will contact the financial institution who sold you the PPI policy to obtain information relating to the policy.</p>
          </div>  

          <div>
            <FeatherIcon icon="check" color="#7BAE7A" size="36" className="mb-2 mx-auto"/>
            <p className="text-sm"><strong>Once the free check is complete,</strong> we will contact you with the results. You can then decide what to do next.</p>
          </div>

        </div>
      </div>

      <div className="section-yellow">
        <div className="lg:container w-full text-center">
          <div>
            <h1>What is a Plevin claim?</h1>
            <div className="w-2/3 mx-auto">
              <hr />
            </div>
            <p className="text-sm mb-2">These are claims which are related to Payment Protection Insurance (PPI), specifically the commission paid in relation to sale of the PPI. </p>
          </div>
          <div>  
            <p className="text-sm mb-2">In the landmark case Plevin v Paragon Personal Finance ('Plevin'), the Supreme Court ruled that a large commission that was not disclosed to the purchaser at the time of sale created an unfair relationship under the Consumer Credit Act. As a result the Claimant, Mrs Plevin, was entitled to a refund of the commission that was paid to the seller, plus any applicable interest. In the case of Plevin, the commission was over 71% of the PPI premium amount and the Financial Conduct Authority has subsequently confirmed that the average commission was a staggering 67%, and this was rarely disclosed. The good news is that the PPI deadline does not apply to Plevin claims and therefore potentially billions of pounds can still be reclaimed!</p>
          </div>  
        </div>
      </div> 
      


   

    </Layout>    
  );
}

export default MainComponent;
