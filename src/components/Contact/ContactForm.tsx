
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit form data to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message 
          }
        ]);
      
      if (error) throw error;
      
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="animate-fade-in">
        <h2 className="text-2xl font-cormorant mb-6">Send a Message</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-gray-300 bg-transparent focus:border-black focus:ring-0"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-gray-300 bg-transparent focus:border-black focus:ring-0"
              />
            </div>
          </div>
          
          <div>
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border-gray-300 bg-transparent focus:border-black focus:ring-0"
            />
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="min-h-[150px] border-gray-300 bg-transparent focus:border-black focus:ring-0"
            />
          </div>
          
          <div>
            <Button 
              type="submit" 
              variant="outline" 
              disabled={isSubmitting}
              className="w-full sm:w-auto text-base border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-colors duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
      
      <div className="animate-fade-in">
        <h2 className="text-2xl font-cormorant mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Mail className="w-5 h-5 mt-1" />
            <div>
              <h3 className="text-lg font-medium">Email</h3>
              <p className="text-gray-600">hello@novophotography.com</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Phone className="w-5 h-5 mt-1" />
            <div>
              <h3 className="text-lg font-medium">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <MapPin className="w-5 h-5 mt-1" />
            <div>
              <h3 className="text-lg font-medium">Studio</h3>
              <p className="text-gray-600">
                123 Creative Avenue<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
