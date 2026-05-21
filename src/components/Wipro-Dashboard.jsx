import logo from '../assets/wipro.png'
export default function Dashboard() {
  return (
  <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div class = "w-full"> 
        <h1 className="text-6xl font-bold text-black mb-6">
          Good Morning!
          <br />
          Welcome to your
          <br />
          Wipro Dashboard.
        </h1>

        <div className="bg-white border border-gray-300 rounded-2xl p-8 mb-6 shadow-sm">
          <h2 className="text-4xl font-bold mb-6">
            Employee Profile
          </h2>

          <div className="space-y-2 text-3xl">
            <p>
              <span className="font-medium">Name:</span> James
            </p>

            <p>
              <span className="font-medium">Employee ID:</span> WIPRO7839A2
            </p>

            <p>
              <span className="font-medium">Department:</span> Global IT Infrastructure
            </p>
          </div>
        </div>

        
        <div className="bg-white border border-gray-300 rounded-2xl p-8 mb-6 shadow-sm">
          <h2 className="text-4xl font-bold mb-6">
            Current Projects
          </h2>

          <ul className="list-disc pl-5 space-y-4 text-2xl">
            <li>
              Advanced Threat Protection (Wipro Security Operations)
            </li>

            <li>
              Legacy Mainframe Optimization (Financial Services Client)
            </li>

            <li>
              AI/ML for Predictive Maintenance (Industrial Client)
            </li>

            <li>
              Data Privacy Compliance Audit
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-300 rounded-2xl p-8 mb-6 shadow-sm">
          <h2 className="text-4xl font-bold mb-6">
            Team Notices
          </h2>

          <p className="text-3xl text-red-700 font-medium">
            ⚠️ Product Strategy Call @ 11:30 AM!
          </p>
        </div>

        <div className="flex justify-between">
          <div className="text-2xl leading-relaxed text-gray-700">
            <p>
              Contact: james.wipro@wipro.com | +91-XXXXXXXXXX
            </p>

            <p>
              WIPRO TECHNOLOGY | Wipro Ltd. Global Operations
            </p>
          </div>

          <img src={logo} alt="Wipro Logo"
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
}