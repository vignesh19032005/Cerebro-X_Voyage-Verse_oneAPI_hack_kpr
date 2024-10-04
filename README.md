# **Voyage Verse: Crafting Personalized Journeys beyond Imagination**

---

**Voyage Verse** is a cutting-edge web application that leverages Generative AI to design personalized travel itineraries, perfectly suited to your preferences and budget. Traditional travel planning tools often fail to provide the level of customization and real-time insights that modern travellers seek—Voyage Verse fills that gap, creating dynamic, AI-driven travel plans tailored just for you.

---

## **Key Features**

- **Real-Time Data Access with Weather Updates**:  
  Stay informed with up-to-the-minute data on attractions, hotels, activities, and local weather.
  
- **Dynamic Pricing Recommendations**:  
  Receive budget-friendly travel options and personalized recommendations based on real-time data.
  
- **Enhanced Location-Based Navigation**:  
  Seamless navigation using advanced geolocation services, ensuring you stay on track during your journey.
  
- **PDF Itineraries via Email**:  
  Get your detailed travel plans delivered straight to your inbox in a convenient PDF format for easy access and management.
  
- **Efficient Itinerary Management**:  
  Enjoy live updates to your itinerary, keeping your travel plans current and flexible.

---

## **How It Works**

**Input**:  
Enter your desired travel preferences (dates, budget, destination, activities, etc.).

**Output**:  
Receive a personalized, AI-generated travel itinerary.

---

## **Usage**

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/voyage-verse.git
    ```
2. Navigate to the project directory:
    ```bash
    cd voyage-verse
    ```
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Run the application (Django):
    ```bash
    python manage.py runserver
    ```

---

## **Technologies Used**

- **Backend**: Django  
- **Frontend**: HTML, CSS, JavaScript  
- **Language Models**: Hugging Face Transformers Library  
- **Acceleration Library**: Intel Acceleration Library and AutoAWQ  
- **Deployment**: Intel DevCloud  
- **APIs**: Foursquare (Places), OpenCage (Geolocation)

---

## **Advantages of Migrating to OneAPI**

- Availability of High Computing Services  
- Good Developer Support  
- Seamless Interface

---

## **Intel OneAPI**

**oneAPI** is an open, standards-based programming model that's designed to help developers create applications that target a variety of architectures, including CPUs, GPUs, and FPGAs. It's intended to eliminate the need for developers to maintain separate code bases for each architecture.

---

## **Utilizing Intel OneAPI PyTorch Acceleration**

To utilize Intel's acceleration, we're using the library `intel_extension_for_pytorch`:

```python
import intel_extension_for_pytorch as ipex
optimized_tag_generator = ipex.optimize(tag_generator, dtype=torch.bfloat16)


This format adds a professional structure to the README, with bolded headers, borders (using `---`), and proper code formatting where necessary.
