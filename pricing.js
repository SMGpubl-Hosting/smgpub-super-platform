import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Pricing() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Pricing Plans</h1>
        <ul>
          <li>Basic Plan - $99.99</li>
          <li>Pro Plan - $199.99/month</li>
          <li>Enterprise Plan - Contact us</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}

