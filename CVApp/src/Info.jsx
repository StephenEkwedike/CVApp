import { useState } from "react"

export default function Render() {
  const [genInfo, setGenInfo] = useState({ name: '', email: '', phoneNo: '' });
  const [edInfo, setEdInfo] = useState({ name: '', title: '', study: '' });
  const [exp, setExp] = useState({ companyName: '', position: '', responsibilities: '', dateFrom: '', dateUntil: '' });


  const [status, setStatus] = useState('')

 
  async function handleSubmit(e){
    e.preventDefault()
    setStatus('Sending')
    await fakeSendMessage()
    setStatus('Sent')
  }
  const isSent = status === 'Sent'
  const isSending = status === 'Sending'
  if(isSent){
        return(
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <h2>Thanks for Applying To Quant Industries</h2>
                <p>Rest assured, each application is hand read by an employee</p>
            </div>
        )
    }

  const fakeSendMessage = () => new Promise((resolve)=>{
    setTimeout(resolve, 2000)
  })
  
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
    <form onSubmit={handleSubmit}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <GeneralInfo geninfo={genInfo} onChange={(e) => setGenInfo({ ...genInfo, [e.target.name]: e.target.value })} />
        <EduInfo edinfo={edInfo} onChange={(e) => setEdInfo({ ...edInfo, [e.target.name]: e.target.value })} />
        <Experience expinfo={exp} onChange={(e) => setExp({ ...exp, [e.target.name]: e.target.value })} />
        <hr/>
        <button style = {{display:'flex', alignContent:'left'}}disabled = {isSending}>Submit</button>
        {isSending && <p>...Sending Application</p>}
      </div>
    </form>  
      {/* PageUI receives expinfo as a prop */}
      <div style={{ flex: 1 }}><PageUI expInfo={exp} edInfo={edInfo} genInfo={genInfo} /></div>
    </div>
  );
}

const layout = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px'
}

function GeneralInfo({ geninfo, onChange }) {
  return (
    <div style={layout}>
      <h2>General Information</h2>
      <input
        value={geninfo.name}
        name="name" // Add name attribute
        onChange={onChange}
        placeholder="Name"
      />
      <input
        value={geninfo.email}
        name="email" // Add name attribute
        onChange={onChange}
        placeholder="E-mail"
      />
      <input
        value={geninfo.phoneNo}
        name="phoneNo" // Add name attribute
        onChange={onChange}
        placeholder="Phone Number"
      />
    </div>
  );
}

function EduInfo({ edinfo, onChange }) {
  return (
    <div style={layout}>
      <h2>Educational Information</h2>
      <input
        value={edinfo.name}
        name="name" // Add name attribute
        onChange={onChange}
        placeholder="Educational Institution"
      />
      <input
        value={edinfo.title}
        name="title" // Add name attribute
        onChange={onChange}
        placeholder="Title"
      />
      <input
        value={edinfo.study}
        name="study" // Add name attribute
        onChange={onChange}
        placeholder="Study"
      />
    </div>
  );
}

function Experience({ expinfo, onChange }) {
  return (
    <div style={layout}>
      <h2>Work Experience</h2>
      <input
        value={expinfo.companyName}
        name="companyName" // Add name attribute
        onChange={onChange}
        placeholder="Company Name"
      />
      <input
        value={expinfo.position}
        name="position" // Add name attribute
        onChange={onChange}
        placeholder="Position"
      />
      <input
        value={expinfo.responsibilities}
        name="responsibilities" // Add name attribute
        onChange={onChange}
        placeholder="Job Description"
      />
      <input
        value={expinfo.dateFrom}
        name="dateFrom" // Add name attribute
        onChange={onChange}
        placeholder="Start Date"
      />
      <input
        value={expinfo.dateUntil}
        name="dateUntil" // Add name attribute
        onChange={onChange}
        placeholder="End Date"
      />
    </div>
  );
}

function PageUI({ genInfo, edInfo, expInfo }) {
    return (
      <div>
        <h1>General Information</h1>
        <p>Applicant Name: {genInfo.name}</p>
        <p>Email: {genInfo.email}</p>
        <p>Phone Number: {genInfo.phoneNo}</p>
  
        <h1>Educational Information</h1>
        <p>University Name: {edInfo.name}</p>
        <p>Degree Title: {edInfo.title}</p>
        <p>Field of Study: {edInfo.study}</p>
  
        <h1>Experience Information</h1>
        <p>Company Name: {expInfo.companyName}</p>
        <p>Position: {expInfo.position}</p>
        <p>Responsibilities: {expInfo.responsibilities}</p>
        <p>From: {expInfo.dateFrom} To: {expInfo.dateUntil}</p>
      </div>
    );
  }
  