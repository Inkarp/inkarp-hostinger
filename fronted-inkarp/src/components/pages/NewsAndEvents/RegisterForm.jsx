import React, { useMemo, useState } from "react";
import { X } from "lucide-react";
import axios from "axios";

const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

const RegisterForm = ({ isOpen, onClose, webinars = [], preselected = null }) => {
  const today = useMemo(() => startOfToday(), []);
  const upcomingWebinars = useMemo(() => {
    return (webinars || [])
      .filter(w => {
        const d = new Date(w.date);
        d.setHours(0, 0, 0, 0);
        return d >= today;
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [webinars, today]);

  const preselectedTitle =
    preselected && new Date(preselected.date).setHours(0, 0, 0, 0) >= today.getTime()
      ? preselected.title
      : (upcomingWebinars[0]?.title || "");

  // Add designation to initial state
  const [formData, setFormData] = useState({
    webinarTitle: preselectedTitle,
    name: "",
    email: "",
    contact: "",
    companyName: "",
    department: "",   // keep & require
    designation: "",  // NEW FIELD
    country: "",
    state: "",
    city: "",
  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post(
        "https://inkarppersonal.vercel.app/api/webinar/register",
        formData
      );

      if (response.data?.success) {
        setStatus({
          type: "success",
          message: "Registration successful! We will send you webinar details shortly.",
        });
        setFormData({
          webinarTitle: upcomingWebinars[0]?.title || "",
          name: "",
          email: "",
          contact: "",
          companyName: "",
          department: "",   // keep & require
          designation: "",  // NEW FIELD
          country: "",
          state: "",
          city: "",
        });
      } else {
        setStatus({
          type: "error",
          message: response.data?.message || "An error occurred during registration.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "An error occurred during registration. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-title"
    >
      <div className="w-full max-w-2xl bg-[#F5F5F5] rounded-2xl shadow-2xl border border-black/10 overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <h2 id="register-title" className="font-[MaxOT] text-2xl md:text-3xl text-black tracking-tight">
              Register Now
            </h2>
            <p className="font-[Roboto] text-sm text-black/70 mt-1">
              Please fill in your details below. Fields marked * are required.
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="inline-flex items-center justify-center rounded-full p-2 border border-black/10 bg-white hover:bg-[#E63946]/10 hover:border-[#E63946] transition"
          >
            <X className="h-5 w-5 text-black" />
          </button>
        </div>

        {/* Status */}
        {status.message && (
          <div
            className={`mx-6 mb-2 rounded-lg px-4 py-3 text-sm font-[Roboto] ${status.type === "success"
              ? "bg-green-100 text-green-800 border border-green-300"
              : "bg-red-100 text-red-800 border border-red-300"
              }`}
          >
            {status.message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Webinar Title (dropdown of only upcoming) */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-[Roboto] text-sm text-black mb-1">
              Select Webinar <span className="text-[#E63946]">*</span>
            </label>
            <select
              name="webinarTitle"
              required
              value={formData.webinarTitle}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white border border-black/10 outline-none focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946]"
            >
              {upcomingWebinars.length === 0 ? (
                <option value="">No upcoming webinars</option>
              ) : (
                upcomingWebinars.map(w => (
                  <option key={w.id} value={w.title}>
                    {w.title}
                  </option>
                ))
              )}
            </select>
          </div>

          {/* Name */}
          <div className="flex flex-col">
            <label className="font-[Roboto] text-sm text-black mb-1">
              Name <span className="text-[#E63946]">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white border border-black/10 outline-none focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] placeholder:text-black/60"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-[Roboto] text-sm text-black mb-1">
              Email <span className="text-[#E63946]">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white border border-black/10 outline-none focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] placeholder:text-black/60"
              placeholder="name@company.com"
            />
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <label className="font-[Roboto] text-sm text-black mb-1">
              Contact <span className="text-[#E63946]">*</span>
            </label>
            <input
              type="tel"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white border border-black/10 outline-none focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] placeholder:text-black/60"
              placeholder="+91 98765 43210"
            />

          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label className="font-[Roboto] text-sm text-black mb-1">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white border border-black/10 outline-none focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] placeholder:text-black/60"
              placeholder="Company / Institution"
            />
          </div>

          {/* Department (free text) */}
          <div className="flex flex-col">
            <label className="font-[Roboto] text-sm text-black mb-1">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white border border-black/10 outline-none focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] placeholder:text-black/60"
              placeholder="R&D / QA / Procurement"
            />
          </div>
          {/* Designation */}
          <div className="flex flex-col">
            <label className="font-[Roboto] text-sm text-black mb-1">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="p-3 rounded-lg bg-white border border-black/10 outline-none focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] placeholder:text-black/60"
              placeholder="Manager / Scientist / Student"
            />
          </div>



          {/* Country */}


          {/* City + State on one row */}
          <div className="md:col-span-2">
            <div className="flex flex-col md:flex-row gap-4">
              {/* City */}
              <div className="flex-1">
                <label className="font-[Roboto] text-sm text-black mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white border border-black/10 outline-none focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] placeholder:text-black/60"
                  placeholder="Hyderabad"
                />
              </div>

              {/* State */}
              <div className="flex-1">
                <label className="font-[Roboto] text-sm text-black mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white border border-black/10 outline-none focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] placeholder:text-black/60"
                  placeholder="Telangana"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-[Roboto] text-sm text-black mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="p-3 rounded-lg bg-white border border-black/10 outline-none focus:ring-2 focus:ring-[#E63946] focus:border-[#E63946] placeholder:text-black/60"
                placeholder="India"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 pt-2">
            <button
              type="submit"
              disabled={isSubmitting || upcomingWebinars.length === 0}
              className={`w-full rounded-xl py-3 font-[MaxOT] tracking-wide text-white bg-[#E63946] shadow-md border border-[#E63946] transition
                ${isSubmitting || upcomingWebinars.length === 0 ? "opacity-60 cursor-not-allowed" : "hover:brightness-95 active:scale-[0.99]"}`}
            >
              {upcomingWebinars.length === 0
                ? "No Upcoming Webinars"
                : isSubmitting
                  ? "Submitting…"
                  : "Register →"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
