import React from 'react'
import Card from './components/Card'
const App = () => {

const jobOpenings = [
  {
    id: 1,
    brandLogo: "https://imgs.search.brave.com/jyd8scKco5CMijH9j5Fdn1IkWJY97k2zT-5Qo0wMkLA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/Z29vZ2xlLnN2Zw",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Bangalore, India",
  },
  {
    id: 2,
    brandLogo: "https://imgs.search.brave.com/6InDYi1om_DyJBFgqk0jps0sbI5UT-03qYYgYXFiIdA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW1pY3Jvc29mdC1p/Y29uLXN2Zy1kb3du/bG9hZC1wbmctMTkw/NzU1LnBuZz9mPXdl/YnAmdz0xMjg",
    company: "Microsoft",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$62/hr",
    location: "Hyderabad, India",
  },
  {
    id: 3,
    brandLogo: "https://imgs.search.brave.com/oNO9R5lHH8XhwgANmbzVSWFupohKbAbfLCGU5JBiD4U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA0L2FtYXpvbi1s/b2dvLTAucG5n",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Mumbai, India",
  },
  {
    id: 4,
    brandLogo: "https://imgs.search.brave.com/IbBFJOewz0x35lusSdpGvx80x4dPDM0IVIVJ-zk4ABs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MzU5Mzg4NDMvZmls/ZS9vcmlnaW5hbC1l/M2U5OTM1MjdmYTIw/OTAwODM1OGVlZWFh/NmNiOWVhOC5qcGc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy",
    company: "Meta",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$82/hr",
    location: "Menlo Park, USA",
  },
  {
    id: 5,
    brandLogo: "https://imgs.search.brave.com/ar2ZUVuxvDeBu2H7pxmH1cJQSmH5tHbVXG3uKw4lyf8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2FwcGxlLWxvZ28t/cG5nL2FwcGxlLWxv/Z28tcG5nLXdoYXQt/eW91LW5lZWQta25v/dy1iZWZvcmUtcmVi/cmFuZGluZy0xMS5w/bmc",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78/hr",
    location: "Cupertino, USA",
  },
  {
    id: 6,
    brandLogo: "https://imgs.search.brave.com/77w3UGSOHUTZBxWHb6KSS0n9gbvJUclUhYz7jYTxtvs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb21w/YW55bG9nb3Mub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzExL05ldGZsaXgt/MjAxNi0zMDB4MjAw/LnBuZw",
    company: "Netflix",
    datePosted: "3 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Los Gatos, USA",
  },
  {
    id: 7,
    brandLogo: "https://imgs.search.brave.com/se92XjDUTMxn7vTJf3rCPnASmVsUFRzS2jS2JA7CCeI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/OS9udmlkaWFfaWNv/bi1sb2dvX2JyYW5k/bG9nb3MubmV0X3pu/MWVuLTMwMHgyMTAu/cG5n",
    company: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$88/hr",
    location: "Pune, India",
  },
  {
    id: 8,
    brandLogo: "https://imgs.search.brave.com/bL4DlP2mbJWWJUXi03YABbaH_IyQOMaODR0sgsINSJY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/NS9hZG9iZV9pbmMu/LWxvZ28tYnJhbmRs/b2dvcy5uZXRfLTMw/MHgzMDAucG5n",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Noida, India",
  },
  {
    id: 9,
    brandLogo: "https://imgs.search.brave.com/EHkKVr1Uo6rsEGpqA_x3nWJLDrGzEHjXgl3IR3yJ7aA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci81NzAv/MjEvSEQtd2FsbHBh/cGVyLWludGVsLWJy/YW5kLWxvZ28taW50/ZWwtbG9nby1icmFu/ZC10aHVtYm5haWwu/anBn",
    company: "Intel",
    datePosted: "5 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Chennai, India",
  },
  {
    id: 10,
    brandLogo: "https://imgs.search.brave.com/j8DkLIFPNdPUm8GkFanANh6qIq7OlwjBvvalfvbyqWI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2FpLmNvbS91/cGxvYWRzL291dHB1/dC8yMDI1LzAyLzE4/L2NmNWFhZDJlYTc2/OGM1MDdjZTQxYTEy/NDk1ODg1YzlhLmpw/Zz90PTE3Mzk4NTA1/MjU",
    company: "OpenAI",
    datePosted: "8 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "San Francisco, USA",
  },
];



  console.log(jobOpenings)

  return (
    <div className="parent">
      {jobOpenings.map(function(elem,idx){
          return <div key={idx}>
              <Card   company={elem.company} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} datePosted={elem.datePosted}/>
          </div>
      })}
    </div>
  )
}

export default App