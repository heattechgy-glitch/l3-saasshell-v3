import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { CreditCard, Download, FileText } from "lucide-react";

export default function Billing() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
  }, []);

  const invoices = [
    { id: 1, date: "Jun 2026", amount: 49, status: "Paid" },
    { id: 2, date: "May 2026", amount: 49, status: "Paid" },
    { id: 3, date: "Apr 2026", amount: 49, status: "Paid" },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Billing & Subscription</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-6 h-6 text-[#0ea5e9]" />
              <h2 className="text-xl font-semibold">Current Plan</h2>
            </div>
            <div className="mb-4">
              <div className="text-2xl font-bold mb-1">Pro</div>
              <div className="text-gray-400">$49/month</div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400">Usage this month</span>
                <span className="text-gray-300">80%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-[#0ea5e9] rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            <button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
              Upgrade to Enterprise
            </button>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#0ea5e9]" />
              <h2 className="text-xl font-semibold">Payment Method</h2>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg mb-4">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <div>
                <div className="font-medium">•••• •••• •••• 4242</div>
                <div className="text-sm text-gray-400">Expires 12/2026</div>
              </div>
            </div>
            <button className="w-full border border-gray-700 hover:border-gray-600 text-gray-300 font-medium py-2.5 px-4 rounded-lg transition-colors">
              Update Payment Method
            </button>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Invoice History</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Status</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-400">Download</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                    <td className="py-4 px-4 text-gray-300">{invoice.date}</td>
                    <td className="py-4 px-4 text-gray-300">${invoice.amount}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                        {invoice.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="text-[#0ea5e9] hover:text-[#0284c7] transition-colors">
                        <Download className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}