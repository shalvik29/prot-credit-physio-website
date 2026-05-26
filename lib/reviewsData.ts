export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  service: string;
  avatarColor: string; // Tailwind color matching avatar in screenshots
  verified: boolean;
}

export const reviewsData: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Debbie Borg',
    rating: 5,
    date: 'a week ago',
    text: 'This was my first visit for my back and the treatment was awesome. Simoni did a great job on helping me move easier and explained everything she was doing to make my visit more relaxed. She comes highly recommended.',
    service: 'Back & Spine Care',
    avatarColor: 'bg-teal-700 text-white',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Jaimin Thakker',
    rating: 5,
    date: 'a week ago',
    text: 'Great experience at Port Credit Physio and Rehab. Simoni helped me fix a nagging shoulder injury from cricket and racquet sports. She used manual therapy and shockwave to get me moving again. I really appreciated how she explained the anatomy behind the pain. Highly recommend this Port Credit physio!',
    service: 'Sports Injury & Shockwave',
    avatarColor: 'bg-blue-800 text-white',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Oleksandra Kikhard',
    rating: 5,
    date: 'a week ago',
    text: 'My experience with Simoni is really positive. She is knowledgeable and thorough in identifying the issue and doing whatever is necessary to fix it. I would recommend her to anyone who requires a physiotherapy.',
    service: 'Physiotherapy & Care',
    avatarColor: 'bg-amber-600 text-white',
    verified: true,
  },

  {
    id: 'rev-5',
    name: 'Romi Mintchev',
    rating: 5,
    date: '3 weeks ago',
    text: 'Simoni of Port Credit Physio and Rehab is an essential partner in my recovery from dual fracture and ORIF surgery in my left ankle. She\'s professional, knowledgeable, very kind and personable. I strongly recommend her services.',
    service: 'Post-Op Ankle Rehab',
    avatarColor: 'bg-orange-600 text-white',
    verified: true,
  },
  {
    id: 'rev-6',
    name: 'Philip Hutchinson',
    rating: 5,
    date: 'a month ago',
    text: 'Simone was very professional and thorough. She took great care to diagnose my issues and worked up a plan to help rehabilitate my shoulder.\nHaving been to a number of Physio Therapists in my life, Simoni is one of the best . Great follow up with a detailed plan in writing for me to work on at home. You won\'t be disappointed when you choose to work with her.',
    service: 'Shoulder Rehab & Home Care',
    avatarColor: 'bg-green-600 text-white',
    verified: true,
  },
  {
    id: 'rev-7',
    name: 'Harsh Trivedi',
    rating: 5,
    date: 'a month ago',
    text: 'Great experience at this new clinic. The place is clean and welcoming, and everything felt well organized.\nSimoni Bhagat was really good,she listened, explained things clearly, and made the session comfortable.\nSolid care overall. Would recommend.',
    service: 'General Physiotherapy',
    avatarColor: 'bg-purple-600 text-white',
    verified: true,
  },
  {
    id: 'rev-8',
    name: 'Parish Jain',
    rating: 5,
    date: 'a month ago',
    text: 'Simoni is an amazing physiotherapist and she has been of incredible support during my hip replacement rehabilitation journey.\n\nHighly recommend for genuine therapy and care',
    service: 'Hip Replacement Recovery',
    avatarColor: 'bg-indigo-600 text-white',
    verified: true,
  },
  {
    id: 'rev-9',
    name: 'Amy Hoidas',
    rating: 5,
    date: 'a month ago',
    text: 'I’m brought my 13yo son in because of a muscle strain in his calf muscle. He’s an athletic kid and has injured himself from time to time and we’ve been to other physiotherapists in the area. I’m so glad to have found this new place! Simoni was fantastic. She was gentle and kind and spoke directly to my son. She took the time and care to explain what she was doing, especially when showing him the exercises he needs to do. I would definitely recommend Simoni!',
    service: 'Pediatric Muscle Strain Care',
    avatarColor: 'bg-rose-500 text-white',
    verified: true,
  },
  {
    id: 'rev-10',
    name: 'Stoph Reebs',
    rating: 5,
    date: 'a month ago',
    text: 'Simoni was great! Awesome bedside manner. She is very knowledgeable and attentive.',
    service: 'Attentive Physiotherapy',
    avatarColor: 'bg-orange-700 text-white',
    verified: true,
  }
];
