# **Voyage Verse: Crafting Personalized Journeys beyond Imagination**

---

**Voyage Verse** is a cutting-edge web application that leverages Generative AI to design personalized travel itineraries, perfectly suited to your preferences and budget. Traditional travel planning tools often fail to provide the level of customization and real-time insights that modern travelers seek—Voyage Verse fills that gap, creating dynamic, AI-driven travel plans tailored just for you.

---

## **Key Features**

- **Timing Flexibility**:  
  Allow users to adjust or customize the timing of their activities, ensuring plans are adaptable to real-time changes (like traffic or delays).

- **User-Friendly Input Interface**:  
  Make sure the input forms and options for users are simple and clear, enhancing the overall experience.

- **Hotel Recommendations**:  
  Provide suggestions for accommodations, potentially offering options with various price ranges or proximity to planned activities.

- **Activity Suggestions with Delay Considerations**:  
  Offer alternative activity suggestions or adjust timings if a delay is expected, keeping travel smooth even with unforeseen changes.

- **Pricing Range for Activities**:  
  Show pricing ranges for suggested activities, allowing users to select options that fit their budget.

- **Map Integration**:  
  Include dynamic maps that help visualize the planned itinerary, hotels, and activities for easier navigation.

---

## **How It Works**

**Input**:  
Users provide travel details such as destination, budget, and preferences. Voyage Verse uses this information, along with real-time data, to create the perfect travel itinerary.
![Flowchart (4)](https://github.com/user-attachments/assets/08ed4ae9-0137-4d2a-a669-91a266f77388)

- **Home Page**:  
  ![home](home.jpg)
  
- **Modal for Details Input**:  
  ![modal](modal.jpg)

- **Top Destinations**:  
  ![top](top.jpg)

---

## **Usage**

To get started with **Voyage Verse**:

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

- **Backend**:  
  ![Django](https://img.shields.io/badge/Django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white) Django framework powers the backend of the application.

- **Frontend**:  
  - ![HTML](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
  - ![CSS](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
  - ![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

- **AI & Language Models**:  
  - ![Hugging Face](https://img.shields.io/badge/Hugging%20Face-%23FFD700.svg?style=for-the-badge&logo=huggingface&logoColor=white) Hugging Face Transformers Library for natural language generation.
  
- **Acceleration Library**:  
  - ![Intel](https://img.shields.io/badge/Intel-0071C5.svg?style=for-the-badge&logo=intel&logoColor=white) Intel Acceleration Library with AutoAWQ for efficient model execution.

- **APIs**:  
  - ![Foursquare](https://img.shields.io/badge/Foursquare-%23F94877.svg?style=for-the-badge&logo=foursquare&logoColor=white)
  - ![OpenCage](https://img.shields.io/badge/OpenCage-%23A0C3D2.svg?style=for-the-badge&logo=opencage&logoColor=white)
  - OpenWeather API for weather data, Google Maps API for dynamic navigation.

---

## **Output**

The personalized itinerary is provided to users via a beautifully crafted, detailed PDF. Here’s an example of what you can expect:
![WhatsApp Image 2024-10-05 at 10 44 47_e491d286](https://github.com/user-attachments/assets/a092a500-eea7-4381-b1c9-dfccd587fa1e)

![Untitled design](https://github.com/user-attachments/assets/8318309e-9a4f-4a18-9712-fedfe437d0f5)

![WhatsApp Image 2024-10-05 at 10 43 26_043ef1c9](https://github.com/user-attachments/assets/fcf08995-294c-4266-b114-cdcbaff30da5)


---

## Advantages of Migrating to OneAPI

-  Availability of High Computing Services
-  Good Developer Support
-  Seamless Interface

## Intel OneAPI vs AWS Inference Speed Comparison

![compar](https://github.com/user-attachments/assets/27f800d0-5667-4d91-bba0-9b4a412244d0)




## Utilizing Intel OneAPI pytorch Acceleration

To utilize Intel's acceleration, we're using a library <code>intel_extension_for_pytorch</code> 

```
import intel_extension_for_pytorch as ipex

optimized_tag_generator = ipex.optimize(tag_generator, dtype=torch.bfloat16)
```

And as it can be observed, both the models performed observably better with Intel's acceleration library.

## Acknowledgments

- Special thanks to Intel DevCloud for providing resources for efficient scaling and performance.
- Inspired by the need to streamline the job search process for job seekers.


---

## Contact

For any inquiries or feedback, please contact vigneshlakshmanababu@gmail.com, vigneshhariraj@gmail.com, jayashri.v2004@gmail.com, b.karthika7204@gmail.com 

