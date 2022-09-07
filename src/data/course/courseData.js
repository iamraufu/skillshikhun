import videoImage from '../../images/courses/ve.jpg';
// import videoImage from '../../images/full-stack-video-editing.svg';
import digitalImage from '../../images/courses/dm.jpg';
// import digitalImage from '../../images/full-stack-digital-marketing.svg';
import webImage from '../../images/courses/wd.jpg';
// import webImage from '../../images/full-stack-web-development.svg';
import graphicsImage from '../../images/courses/gd.jpg';
// import graphicsImage from '../../images/full-stack-graphic-design.svg';
import ve_i from '../../images/ve_i.jpg';
import dm_i from '../../images/dm_i.jpg';
import wd_i from '../../images/wd_i.jpg';
import gd_i from '../../images/gd_i.jpg';
import wd400 from '../../images/courses/wd400.png'
import ve400 from '../../images/courses/wd400.png'
import dm400 from '../../images/courses/dm400.png'
import gd400 from '../../images/courses/gd400.png'

const courseData = [
    // Freelancing for All
    // {
    //     name: 'Freelancing for All',
    //     id: 'freelancing-for-all',
    //     title: 'Freelancing for All',
    //     slug: 'Freelancing for All',
    //     route: '/freelancing-for-all',
    //     alt_title: 'Freelancing for All',
    //     description: 'Freelancing for All',
    //     short_description: 'Freelancing for All',
    //     source: 'https://www.youtube.com/embed/xop7oG9ga9c?autoplay=1&mute=1',
    //     videoId: 'xop7oG9ga9c',
    //     type: 'Live',
    //     course_duration: '১',
    //     course_duration_eng: 1,
    //     total_classes: '১০',
    //     regular_price: '৯,৯৯৯',
    //     price: 2500,
    //     price_bn: '২৫০০',
    //     offer_price: 2300,
    //     offer_price_bn: '২৩০০',
    //     price_per_month: 1250,
    //     price_per_month_bn: '১২৫০',
    //     price_saved: '২০০',
    //     course_done: '১৫০',
    //     seat_left: '১২',
    //     next_batch: 'সেপ্টেম্বর',
    //     next_batch_eng: '2022-09-04T21:00:00.000+06:00',
    //     course_instructor: 'আতাউল হোসেন',
    //     instructor_designation: 'Top Rated Freelancer on Upwork & Fiverr. A Professional Digital Marketer.',
    //     class_date: [
    //         {
    //             id: 1,
    //             date: '2022-05-13'
    //         },
    //         {
    //             id: 2,
    //             date: '2022-05-27'
    //         }
    //     ],
    //     class_time: '9PM - 10:00PM',
    //     class_date_1: '6, 8, 10 (August 2022)',
    //     class_date_1_value: '2022-08-06',
    //     class_date_1_deadline: '2022-08-06T21:00:00.000+06:00',
    //     // class_date_1_deadline:'July 30th 2022, 9:00:00 pm',
    //     class_date_2: '6, 8, 10 (August 2022)',
    //     class_date_2_value: '2022-08-06',
    //     class_date_2_deadline: '2022-08-06T21:00:00.000+06:00',
    //     // class_date_2_deadline:'August 6th 2022, 9:00:00 pm',
    //     free_number: '92939532748',
    //     free_password: '153338',
    //     free_video_count: '৪',
    //     live_number: '84551599695',
    //     live_password: '870201',
    //     // free_link:'https://zoom.us/wc/92939532748/start',
    //     free_link: 'https://us06web.zoom.us/j/92939532748?pwd=d1RMRkFnUy9hM2F6TUlPbXAxNlFBZz09',
    //     // live_link:'https://zoom.us/wc/84551599695/start',
    //     live_link: 'https://us06web.zoom.us/j/84551599695?pwd=aU5EVHB6SFhqV3NMeEJ6bWV4VHdqUT09',
    //     instructor_image: ve_i,
    //     image: videoImage,
    //     promo_poster:dm400,
    //     feature_alt: [
    //         {
    //             id: 1,
    //             item: 'এই কোর্সটি সম্পূর্ণ নতুনদের জন্য। ভিডিও এডিটিং সম্পর্কে আপনার পূর্ব কোনো ধারনা থাকার দরকার নেই।'
    //         },
    //         {
    //             id: 2,
    //             item: 'ইন্টারনেট কানেকশন সহ একটি কম্পিউটার।'
    //         },
    //         {
    //             id: 3,
    //             item: 'একটি কোর্সের ভিতর পাচ্ছেন জুম এর মাধ্যমে লাইভ ক্লাস আকারে মোট ২৪ টি ক্লাস।'
    //         },
    //         {
    //             id: 4,
    //             item: 'কোর্স ইন্সট্রাক্টর কর্তৃক সরাসরি কোর্স সংক্রান্ত আপনার সকল সমস্যার সমাধানের সুব্যবস্থা।'
    //         }
    //     ],
    //     features: [
    //         {
    //             id: 1,
    //             item: 'Adobe Premiere Pro এবং Adobe After Effects যেভাবে ব্যবহার করবেন।'
    //         },
    //         {
    //             id: 2,
    //             item: 'বেসিক থেকে অ্যাডভান্স লেভেল পর্যন্ত ভিডিও এডিটিং এবং মোশন ডিজাইন এর সকল খুঁটিনাটি।'
    //         },
    //         {
    //             id: 3,
    //             item: 'লোকাল এবং ইন্টারন্যাশনাল মার্কেটে ভিডিও এডিটিং দক্ষতা কাজে লাগিয়ে যেভাবে ক্যারিয়ার গড়বেন।'
    //         },
    //         {
    //             id: 4,
    //             item: 'ফ্রিল্যান্সার হিসেবে রিমোট জব এর মাধ্যমে যেভাবে ঘরে বসেই আয় করবেন।'
    //         }
    //     ],
    //     featuresDescription: '২ মাসে ২৪ টি ক্লাসের এই কোর্সটি সাজানো হয়েছে যেন সহজভাবে ভিডিও এডিটিং এর প্রধান বিষয়গুলো নিয়ে আলোচনা করা হয় এবং সেগুলোর উপর কুইজের মাধ্যমে হাতে-কলমে নিজেকে যাচাই করা যায়।',
    //     featureBonus: [
    //         {
    //             id: 1,
    //             item: 'দ্রুত ও বন্ধুত্বসুলভ প্রশ্নোত্তর ব্যবস্থা।'
    //         },
    //         {
    //             id: 2,
    //             item: 'সফলভাবে কোর্স সমাপ্তির পর ডাউনলোডযোগ্য ইউনিক সার্টিফিকেট।'
    //         }
    //     ],
    //     outline: [
    //         {
    //             id: 'One',
    //             title: 'ফ্রিল্যান্সিং কি? What is Freelancing?',
    //             description: 'এই ক্লাসটি হবে মূলত আমার এবং শিক্ষার্থীদের পরিচয়পর্ব। আমি নিজেকে পরিচয় করিয়ে দিব- আমি কে, আমি Fiverr এবং অন্যান্য ফ্রিল্যান্স প্ল্যাটফর্মে ভিডিও এডিটিং এর মাধ্যমে কীভাবে আয় করছি, একইসাথে শিক্ষার্থীদের সম্পর্কে জানবো উপযুক্ত পরিবেশে শেখানোর জন্য যোগাযোগ গুরুত্বপূর্ণ।',
    //             isFree: true,
    //             video: [
    //                 {
    //                     isFree: true,
    //                     subtitle: 'ক্লাস ১ - ইন্ট্রডাকশন (Introduction)',
    //                     videoId: 'wgzq0zWASEU'
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Two',
    //             title: 'ফ্রিল্যান্সিং করতে কি ইংরেজি জানা প্রয়োজন? Do you need English for Freelancing?',
    //             description: 'এই ক্লাসে, আমি দেখাবো কিভাবে আমরা অ্যাডবি প্রিমিয়ার প্রো ইন্সটল করে তার মাধ্যমে কাজ শুরু করতে পারি।',
    //             isFree: true,
    //             video: [
    //                 {
    //                     isFree: true,
    //                     subtitle: 'ক্লাস ২ - ইনস্টলেশন এবং শুরু',
    //                     videoId: 'VN_lfbqhz04'
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Three',
    //             title: 'কিভাবে নিজের Niche নির্বাচন করবেন? Choose your Niche',
    //             description: 'এই ক্লাসে আমরা শিখবো কিভাবে প্রিমিয়ার প্রো এ এডিট করার জন্য প্রোজেক্ট তৈরি করতে হয়।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস ৩ - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Four',
    //             title: 'একটি স্কিল শিখে, সেইটিতে দক্ষ হওয়ার প্রক্রিয়া Learn your skill & be as expert as you can on it',
    //             description: 'নির্ভুল এবং দ্রুত এডিটিং এর জন্য সঠিক ওয়ার্কস্পেস থাকা খুবই গুরুত্বপূর্ণ। এই ক্লাসে আমি দেখাবো কিভাবে আমরা সেরা এডিটিং অভিজ্ঞতার জন্য সবচেয়ে সুবিধাজনক ওয়ার্কস্পেস ব্যবহার করতে পারি।',
    //             isFree: true,
    //             video: [
    //                 {
    //                     isFree: true,
    //                     subtitle: 'ক্লাস ৪ - ওয়ার্কস্পেস এবং পানেল',
    //                     videoId: 't5Mp65o6edM'
    //                 },
    //                 {
    //                     isFree: true,
    //                     subtitle: 'ক্লাস ৫ - Q and A',
    //                     videoId: 'JuYP_e9q7hE'
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Five',
    //             title: 'মার্কেটপ্লেস কি? What is Marketplace?',
    //             description: 'একটি প্রজেক্টে কাজ শুরু করার জন্য আমাদের মিডিয়া ফাইল আমদানি করতে হয়। আমি দেখাবো কিভাবে কম্পিউটার থেকে প্রিমিয়ার প্রো প্রোজেক্টে মিডিয়া ইম্পোর্ট করতে হয়।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Six',
    //             title: 'ফাইবার মার্কেটপ্লেস সম্পর্কে বিস্তর ধারণা Introduction to Fiverr Marketplace',
    //             description: 'এই ক্লাসে আমি আপনাদের সিকুয়েন্স এর সাথে পরিচয় করিয়ে দিব এবং কোর্স আগানোর সাথে সাথে আমরা এটি সম্পর্কে আরও শিখবো।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Seven',
    //             title: 'আপ ওয়ার্ক মার্কেটপ্লেস সম্পর্কে বিস্তর ধারণা Introduction to Upwork Marketplace',
    //             description: 'কখনও কখনও প্রিমিয়ার প্রো আমাদের ইম্পোর্ট করা ভিডিও এবং অ্যাসেটগুলো খুঁজে পেতে ব্যর্থ হয়। এই ক্লাসে কীভাবে সেগুলি পুনরায় লিঙ্ক করতে হয় এবং হারিয়ে যাওয়া ফাইলগুলি খুঁজে পেতে হয় তা শেখাবো।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Eight',
    //             title: 'মার্কেটপ্লেস গাইডলাইন Marketplace guidelines',
    //             description: 'প্রিমিয়ার প্রো এডিটিং আরও দক্ষতার সাথে করার জন্য একটি দুর্দান্ত এবং সহজ পদ্ধতি ব্যবহার করে দুটি মনিটর ব্যবহার করে। এই ক্লাসে আমি শিক্ষার্থীদের এই পদ্ধতির সাথে পরিচয় করিয়ে দিবো এবং আমরা এগিয়ে যাওয়ার সাথে সাথে এটি সম্পর্কে আরও জানবো।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Nine',
    //             title: 'কিভাবে একটি ফাইবার একাউন্ট খুলবেন? How to Open a Fiverr Account?',
    //             description: 'দ্রুত এডিট করার জন্য কী-বাইন্ড এবং শর্টকাট গুলো খুবই জরুরী। আমি এই ক্লাসে কীভাবে শর্টকাট দিয়ে দ্রুত এডিট করতে পারি তার প্রো টিপস শেয়ার করবো।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Ten',
    //             title: 'কিভাবে আপনার গিগ তৈরি করবেন? How to create a gig?',
    //             description: 'ভিডিওগুলোকে একত্রিত করতে এবং তা থেকে একটি গল্প তৈরি করতে ট্রিমিং প্রয়োজন। এই ক্লাসে আমি ট্রিমিং এর সবচেয়ে কার্যকর টুল এবং কৌশলগুলোর ব্যবহারর শেখাবো। ',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Eleven',
    //             title: 'কিভাবে বায়ার রিকোয়েস্ট পাঠাবেন? How to send Buyer Requests',
    //             description: 'এই ক্লাসে আমি  L কাট এবং J কাট ব্যবহার করে একটি ভিডিও বা মুভিকে কীভাবে আরও আকর্ষনীয় করা যায় সেসব কার্যকর পদ্ধতিগুলো শেখাবো। এছাড়াও অন্যান্য বিভিন্ন পদ্ধতি সম্পর্কেও ধারনা দিবো।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Twelve',
    //             title: 'ক্লায়েন্টদের সাথে কথা বলার সময়ে যেসব বিষয় মাথায় রাখবেন Things to consider when communicating with a client',
    //             description: 'একটি ভিডিওকে আকর্ষনীয় করার জন্য অডিও এর কাজও সমান গুরুত্বপূর্ণ। এই ক্লাসে আমরা শিখবো কীভাবে ভিডিও এর অডিও বর্ধিত করে একে আরও চিত্তাকর্ষক বানানো যায়।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Thirteen',
    //             title: 'আপনার প্রথম অর্ডার Get your first order.',
    //             description: 'ট্রানজিশন হল ভিডিও এডিটিং এর সবচেয়ে গুরুত্বপূর্ণ প্রভাবগুলির মধ্যে একটি। এই ক্লাসে আমরা নিখুতঁভাবে ভিডিও এর একটি দৃশ্য থেকে অন্য দৃশ্যে মসৃণভাবে সরানো শিখবো।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Fourteen',
    //             title: 'কিভাবে রিভিউ চাইবেন? How to ask for a review?',
    //             description: 'এই ক্লাসে আমরা কী-ফ্রেম এবং পজিশনিং সম্পর্কে শিখবো এবং এগিয়ে যাওয়ার সাথে সাথে এটি সম্পর্কে আরও বিস্তারিত জানতে পারবো।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Fifteen',
    //             title: 'কিভাবে একটি পাইয়োনিয়ার একাউন্ট খুলবেন? How to Open a Payoneer Account?',
    //             description: 'এই ক্লাসে আমরা ভিডিও এর দুটি প্রয়োজনীয় বিষয়, মোশন এবং অপ্যাসিটি সম্পর্কে শিখবো এবং এগিয়ে যাওয়ার সাথে সাথে এটি সম্পর্কে আরও বিস্তারিত জানতে পারবো।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Sixteen',
    //             title: 'কিভাবে আপনার আয় করা অর্থ ক্যাশ আউট করবেন? How to Withdraw your earnings.',
    //             description: 'এই ক্লাসে আমরা শিখবো কিভাবে একটি ভিডিওতে ফাস্ট ফরওয়ার্ড এবং স্লো মোশন ব্যবহার করতে হয়। এছাড়াও ভিডিও এর গতি বিষয়ক অন্যান্য টুল সম্পর্কে জানবো।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Seventeen',
    //             title: 'মার্কেটপ্লেসের বাইরে কিভাবে আপনার ক্লায়েন্টদেরকে নিয়ে যাবেন? How to take your clients outside of Marketplace',
    //             description: 'এই ক্লাসে আমরা শিখবো কিভাবে ভিডিও স্পীড ব্যবহার করে একটি ভিডিওকে আরো প্রফেশনাল এবং ডাইনামিক দেখাতে হয়।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Eighteen',
    //             title: 'মার্কেটপ্লেসের বাইরে কিভাবে কাজের পেমেন্ট নিবেন? How to take payments outside of Marketplace',
    //             description: 'এই ক্লাসে আমি শিক্ষার্থীদের শেখাবো কিভাবে শুধু এক ক্লিকে একটি নড়বড়ে ফুটেজ ঠিক করতে হয়।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'Nineteen',
    //             title: 'ফ্রিল্যান্সিং সম্পর্কে শেষ কিছু কথা Final Thoughts on Freelancing.',
    //             description: 'এই ক্লাসে আমি বিভিন্ন পেশাদার টাইটেল অ্যানিমেশন এবং গ্রাফিক্স টুলগুলোর ব্যবহার শেখাবো।',
    //             isFree: false,
    //             video: [
    //                 {
    //                     isFree: false,
    //                     subtitle: 'ক্লাস - ',
    //                     videoId: ''
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // Video Editing
    {
        name: 'Video Editing',
        id: 'video-editing',
        title: 'ভিডিও এডিটিং',
        slug: 'Video Editing',
        route: '/video-editing',
        alt_title: 'ভিডিও এডিটিং (বেসিক থেকে প্রোফেশনাল)',
        description: 'ইন্টারনেট জগতের সব চমকপ্রদ ভিডিও দেখে আপনি মুগ্ধ, কিন্তু চিন্তিত কিভাবে কম সময়ের মধ্যে এই দক্ষতা আয়ত্ত করে ক্যারিয়ার গড়া যায়? তবে এই কোর্সটি করবে আপনার সকল চিন্তার অবসান। বর্তমান অনলাইন মার্কেটপ্লেসে দক্ষ ভিডিও এডিটর এর রয়েছে পাহাড়সম চাহিদা। সেই চাহিদা পূরণের জন্য কিংবা ফ্রিল্যান্সিং এর মাধ্যমে ঘরে বসেই আয় করার জন্যই আমাদের এই মাস্টার ক্লাস কোর্সটি। অল্প সময়ের মধ্যে ভিডিও এডিটিং এর যাবতীয় কলাকৌশল শিখে হয়ে যান একজন প্রফেশনাল!',
        short_description: 'কিভাবে কম সময়ের মধ্যে ভিডিও এডিটিং আয়ত্ত করে ফ্রিল্যান্সিং এর মাধ্যমে ঘরে বসেই আয় করার জন্যই আমাদের এই মাস্টার ক্লাস কোর্সটি।',
        source: 'https://www.youtube.com/embed/xop7oG9ga9c?autoplay=1&mute=1',
        videoId: 'xop7oG9ga9c',
        type: 'Live',
        course_duration: '২',
        course_duration_eng: 2,
        total_classes: '২৪',
        regular_price: '৯,৯৯৯',
        price: 2500,
        price_bn: '২৫০০',
        offer_price: 2300,
        offer_price_bn: '২৩০০',
        price_per_month: 1250,
        price_per_month_bn: '১২৫০',
        price_saved: '২০০',
        course_done: '১৫০',
        seat_left: '১৭',
        next_batch: 'সেপ্টেম্বর',
        next_batch_eng: '2022-09-11T21:00:00.000+06:00',
        course_instructor: 'সাব্বির আহমেদ',
        instructor_designation: 'Professional Film Editor of BFDC and PhD Researcher on Film Marketing in Malaysia.',
        class_date: [
            {
                id: 1,
                date: '2022-05-13'
            },
            {
                id: 2,
                date: '2022-05-27'
            }
        ],
        class_time: '9PM - 10:00PM',
        class_date_1: '6, 8, 10 (August 2022)',
        class_date_1_value: '2022-08-06',
        class_date_1_deadline: '2022-08-06T21:00:00.000+06:00',
        // class_date_1_deadline:'July 30th 2022, 9:00:00 pm',
        class_date_2: '6, 8, 10 (August 2022)',
        class_date_2_value: '2022-08-06',
        class_date_2_deadline: '2022-08-06T21:00:00.000+06:00',
        // class_date_2_deadline:'August 6th 2022, 9:00:00 pm',
        free_number: '92939532748',
        free_password: '153338',
        free_video_count: '৪',
        live_number: '84551599695',
        live_password: '870201',
        // free_link:'https://zoom.us/wc/92939532748/start',
        free_link: 'https://us06web.zoom.us/j/92939532748?pwd=d1RMRkFnUy9hM2F6TUlPbXAxNlFBZz09',
        // live_link:'https://zoom.us/wc/84551599695/start',
        live_link: 'https://us06web.zoom.us/j/85815124984?pwd=eWZaK2lmK05laWNCRnFPNWxmazRuQT09',
        instructor_image: ve_i,
        image: videoImage,
        promo_poster:ve400,
        feature_alt: [
            {
                id: 1,
                item: 'এই কোর্সটি সম্পূর্ণ নতুনদের জন্য। ভিডিও এডিটিং সম্পর্কে আপনার পূর্ব কোনো ধারনা থাকার দরকার নেই।'
            },
            {
                id: 2,
                item: 'ইন্টারনেট কানেকশন সহ একটি কম্পিউটার।'
            },
            {
                id: 3,
                item: 'একটি কোর্সের ভিতর পাচ্ছেন জুম এর মাধ্যমে লাইভ ক্লাস আকারে মোট ২৪ টি ক্লাস।'
            },
            {
                id: 4,
                item: 'কোর্স ইন্সট্রাক্টর কর্তৃক সরাসরি কোর্স সংক্রান্ত আপনার সকল সমস্যার সমাধানের সুব্যবস্থা।'
            }
        ],
        features: [
            {
                id: 1,
                item: 'Adobe Premiere Pro এবং Adobe After Effects যেভাবে ব্যবহার করবেন।'
            },
            {
                id: 2,
                item: 'বেসিক থেকে অ্যাডভান্স লেভেল পর্যন্ত ভিডিও এডিটিং এবং মোশন ডিজাইন এর সকল খুঁটিনাটি।'
            },
            {
                id: 3,
                item: 'লোকাল এবং ইন্টারন্যাশনাল মার্কেটে ভিডিও এডিটিং দক্ষতা কাজে লাগিয়ে যেভাবে ক্যারিয়ার গড়বেন।'
            },
            {
                id: 4,
                item: 'ফ্রিল্যান্সার হিসেবে রিমোট জব এর মাধ্যমে যেভাবে ঘরে বসেই আয় করবেন।'
            }
        ],
        featuresDescription: '২ মাসে ২৪ টি ক্লাসের এই কোর্সটি সাজানো হয়েছে যেন সহজভাবে ভিডিও এডিটিং এর প্রধান বিষয়গুলো নিয়ে আলোচনা করা হয় এবং সেগুলোর উপর কুইজের মাধ্যমে হাতে-কলমে নিজেকে যাচাই করা যায়।',
        featureBonus: [
            {
                id: 1,
                item: 'দ্রুত ও বন্ধুত্বসুলভ প্রশ্নোত্তর ব্যবস্থা।'
            },
            {
                id: 2,
                item: 'সফলভাবে কোর্স সমাপ্তির পর ডাউনলোডযোগ্য ইউনিক সার্টিফিকেট।'
            }
        ],
        outline: [
            {
                id: 'One',
                title: 'ইন্ট্রডাকশন (Introduction)',
                description: 'এই ক্লাসটি হবে মূলত আমার এবং শিক্ষার্থীদের পরিচয়পর্ব। আমি নিজেকে পরিচয় করিয়ে দিব- আমি কে, আমি Fiverr এবং অন্যান্য ফ্রিল্যান্স প্ল্যাটফর্মে ভিডিও এডিটিং এর মাধ্যমে কীভাবে আয় করছি, একইসাথে শিক্ষার্থীদের সম্পর্কে জানবো উপযুক্ত পরিবেশে শেখানোর জন্য যোগাযোগ গুরুত্বপূর্ণ।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ১ - ইন্ট্রডাকশন (Introduction)',
                        videoId: 'KrXq8LAvmzk'
                    }
                ]
            },
            {
                id: 'Two',
                title: 'ইনস্টলেশন এবং শুরু',
                description: 'এই ক্লাসে, আমি দেখাবো কিভাবে আমরা অ্যাডবি প্রিমিয়ার প্রো ইন্সটল করে তার মাধ্যমে কাজ শুরু করতে পারি।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ২ - ইনস্টলেশন এবং শুরু',
                        videoId: 'VN_lfbqhz04'
                    }
                ]
            },
            {
                id: 'Three',
                title: 'প্রোজেক্ট তৈরি',
                description: 'এই ক্লাসে আমরা শিখবো কিভাবে প্রিমিয়ার প্রো এ এডিট করার জন্য প্রোজেক্ট তৈরি করতে হয়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৩ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Four',
                title: 'ওয়ার্কস্পেস এবং পানেল',
                description: 'নির্ভুল এবং দ্রুত এডিটিং এর জন্য সঠিক ওয়ার্কস্পেস থাকা খুবই গুরুত্বপূর্ণ। এই ক্লাসে আমি দেখাবো কিভাবে আমরা সেরা এডিটিং অভিজ্ঞতার জন্য সবচেয়ে সুবিধাজনক ওয়ার্কস্পেস ব্যবহার করতে পারি।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৪ - ওয়ার্কস্পেস এবং পানেল',
                        videoId: 't5Mp65o6edM'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৫ - Q and A',
                        videoId: 'JuYP_e9q7hE'
                    }
                ]
            },
            {
                id: 'Five',
                title: 'মিডিয়া ইম্পোর্ট',
                description: 'একটি প্রজেক্টে কাজ শুরু করার জন্য আমাদের মিডিয়া ফাইল আমদানি করতে হয়। আমি দেখাবো কিভাবে কম্পিউটার থেকে প্রিমিয়ার প্রো প্রোজেক্টে মিডিয়া ইম্পোর্ট করতে হয়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Six',
                title: 'সিকুয়েন্স কি?',
                description: 'এই ক্লাসে আমি আপনাদের সিকুয়েন্স এর সাথে পরিচয় করিয়ে দিব এবং কোর্স আগানোর সাথে সাথে আমরা এটি সম্পর্কে আরও শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Seven',
                title: 'অফলাইন ফুটেজ রি-লিঙ্ক',
                description: 'কখনও কখনও প্রিমিয়ার প্রো আমাদের ইম্পোর্ট করা ভিডিও এবং অ্যাসেটগুলো খুঁজে পেতে ব্যর্থ হয়। এই ক্লাসে কীভাবে সেগুলি পুনরায় লিঙ্ক করতে হয় এবং হারিয়ে যাওয়া ফাইলগুলি খুঁজে পেতে হয় তা শেখাবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Eight',
                title: 'সোর্স এবং প্রোগ্রাম মনিটর',
                description: 'প্রিমিয়ার প্রো এডিটিং আরও দক্ষতার সাথে করার জন্য একটি দুর্দান্ত এবং সহজ পদ্ধতি ব্যবহার করে দুটি মনিটর ব্যবহার করে। এই ক্লাসে আমি শিক্ষার্থীদের এই পদ্ধতির সাথে পরিচয় করিয়ে দিবো এবং আমরা এগিয়ে যাওয়ার সাথে সাথে এটি সম্পর্কে আরও জানবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Nine',
                title: 'কী-বাইন্ড এবং শর্টকাট',
                description: 'দ্রুত এডিট করার জন্য কী-বাইন্ড এবং শর্টকাট গুলো খুবই জরুরী। আমি এই ক্লাসে কীভাবে শর্টকাট দিয়ে দ্রুত এডিট করতে পারি তার প্রো টিপস শেয়ার করবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Ten',
                title: 'ট্রিমিং',
                description: 'ভিডিওগুলোকে একত্রিত করতে এবং তা থেকে একটি গল্প তৈরি করতে ট্রিমিং প্রয়োজন। এই ক্লাসে আমি ট্রিমিং এর সবচেয়ে কার্যকর টুল এবং কৌশলগুলোর ব্যবহারর শেখাবো। ',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Eleven',
                title: 'L কাট এবং J কাট',
                description: 'এই ক্লাসে আমি  L কাট এবং J কাট ব্যবহার করে একটি ভিডিও বা মুভিকে কীভাবে আরও আকর্ষনীয় করা যায় সেসব কার্যকর পদ্ধতিগুলো শেখাবো। এছাড়াও অন্যান্য বিভিন্ন পদ্ধতি সম্পর্কেও ধারনা দিবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Twelve',
                title: 'অডিও ইফেক্ট এবং ওয়েভফর্ম',
                description: 'একটি ভিডিওকে আকর্ষনীয় করার জন্য অডিও এর কাজও সমান গুরুত্বপূর্ণ। এই ক্লাসে আমরা শিখবো কীভাবে ভিডিও এর অডিও বর্ধিত করে একে আরও চিত্তাকর্ষক বানানো যায়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Thirteen',
                title: 'ট্রানজিশন',
                description: 'ট্রানজিশন হল ভিডিও এডিটিং এর সবচেয়ে গুরুত্বপূর্ণ প্রভাবগুলির মধ্যে একটি। এই ক্লাসে আমরা নিখুতঁভাবে ভিডিও এর একটি দৃশ্য থেকে অন্য দৃশ্যে মসৃণভাবে সরানো শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Fourteen',
                title: 'কী-ফ্রেম এবং পজিশনিং',
                description: 'এই ক্লাসে আমরা কী-ফ্রেম এবং পজিশনিং সম্পর্কে শিখবো এবং এগিয়ে যাওয়ার সাথে সাথে এটি সম্পর্কে আরও বিস্তারিত জানতে পারবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Fifteen',
                title: 'মোশন এবং অপ্যাসিটি',
                description: 'এই ক্লাসে আমরা ভিডিও এর দুটি প্রয়োজনীয় বিষয়, মোশন এবং অপ্যাসিটি সম্পর্কে শিখবো এবং এগিয়ে যাওয়ার সাথে সাথে এটি সম্পর্কে আরও বিস্তারিত জানতে পারবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Sixteen',
                title: 'ভিডিও স্পীড এবং ফ্রিজ ফ্রেম',
                description: 'এই ক্লাসে আমরা শিখবো কিভাবে একটি ভিডিওতে ফাস্ট ফরওয়ার্ড এবং স্লো মোশন ব্যবহার করতে হয়। এছাড়াও ভিডিও এর গতি বিষয়ক অন্যান্য টুল সম্পর্কে জানবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Seventeen',
                title: 'টাইম রিম্যাপিং',
                description: 'এই ক্লাসে আমরা শিখবো কিভাবে ভিডিও স্পীড ব্যবহার করে একটি ভিডিওকে আরো প্রফেশনাল এবং ডাইনামিক দেখাতে হয়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Eighteen',
                title: 'ওয়ার্প স্ট্যাবিলাইজার',
                description: 'এই ক্লাসে আমি শিক্ষার্থীদের শেখাবো কিভাবে শুধু এক ক্লিকে একটি নড়বড়ে ফুটেজ ঠিক করতে হয়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Nineteen',
                title: 'টাইটেল এবং আনিমেটেড গ্রাফিক্স',
                description: 'এই ক্লাসে আমি বিভিন্ন পেশাদার টাইটেল অ্যানিমেশন এবং গ্রাফিক্স টুলগুলোর ব্যবহার শেখাবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Tweenty',
                title: 'গ্রীন স্ক্রীনের বাবহার-বিধি',
                description: 'এই ক্লাসে আমি শিক্ষার্থীদের শেখাবো কিভাবে গ্রীন স্ক্রীনের ব্যাকগ্রাউন্ড অপসারণ করতে হয় এবং সেগুলোকে সবচেয়ে কার্যকরী উপায়ে ব্যবহার করতে হয়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Tweentyone',
                title: 'প্রক্সি কেন ও কীভাবে?',
                description: '4k ফু্টেজ এডিট করার মতো শক্তিশালি সিস্টেমের সকলের কাছে নেই। এই ক্লাসে আমি দেখাবো কিভাবে আমরা কম্পিউটার সরঞ্জামগুলিতে প্রচুর অর্থ ব্যয় না করে 4k ফুটেজ এডিট করতে পারি। ',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Tweentytwo',
                title: 'কালার কারেকশন',
                description: 'কালার গ্রেডিং এবং কালার কারেকশন ভিডিও এডিটিং এর সবচেয়ে গুরুত্বপূর্ণ ও আকর্ষণীয় অংশ। এই ক্লাসে আমি শেখাবো কিভাবে প্রফেশনাল ভাবে কালার কারেকশন করতে হয়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Tweentythree',
                title: 'এক্সপোর্টিং',
                description: 'ভিডিও এডিট করে কী লাভ যদি না আমরা আমাদের সেই ভিডিওটি সফ্টওয়্যারের বাইরেই দেখতে না পাই? এই ক্লাসে আমি দেখাবো কিভাবে প্রিমিয়ার প্রো এ এক্সপোর্ট করা যায়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Tweentyfour',
                title: 'উপসংহার এবং সারসংক্ষেপ',
                description: 'এই ক্লাসে আমরা পূর্ববর্তী যা শিখেছি তার সারাংশ দেখব এবং কীভাবে প্রকৃত ক্লায়েন্টদের সাথে এই দক্ষতাগুলিকে কাজে লাগাতে হয় এবং ভিডিও এডিটিং থেকে অর্থ উপার্জন করতে হয় তার সম্পর্কে বিস্তারিত জানবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস - ',
                        videoId: ''
                    }
                ]
            },
        ]
    },
    // Digital Marketing
    {
        name: 'Digital Marketing',
        id: 'digital-marketing',
        title: 'ডিজিটাল মার্কেটিং',
        slug: 'Digital Marketing',
        route: '/digital-marketing',
        alt_title: 'ডিজিটাল মার্কেটিং (বেসিক থেকে অ্যাডভান্স)',
        description: 'আপনি কি ডিজিটাল মার্কেটিং জগতে নতুন? তবে এই কোর্সটি আপনারই জন্য। ডিজিটাল মার্কেটিং শিখে নিজের ক্যারিয়ার গড়তে এই কোর্সটি হবে আপনার জন্য ‘ভ্যালু ফর মানি।’ আপনি যদি বিভিন্ন অনলাইন এবং অফলাইন মার্কেটে নিজের ব্যবসাকে শক্ত অবস্থানে নিতে চান অথবা সিভিতে যুগোপযোগী দক্ষতা যোগ করতে চান, তবে এই কোর্সটি আপনার জন্য হবে সেরা সমাধান।',
        short_description: 'ডিজিটাল মার্কেটিং শিখে নিজের ক্যারিয়ার গড়তে, বিভিন্ন অনলাইন এবং অফলাইন মার্কেটে নিজের ব্যবসাকে শক্ত অবস্থানে নিতে এই কোর্সটি হবে আপনার জন্য ‘ভ্যালু ফর মানি।’',
        source: 'https://www.youtube.com/embed/6ULPYjUTxyY?autoplay=1&mute=1',
        videoId: '6ULPYjUTxyY',
        type: 'Live',
        course_duration: '২',
        course_duration_eng: 2,
        total_classes: '২৪',
        regular_price: '৯,৯৯৯',
        price: 2500,
        price_bn: '২৫০০',
        offer_price: 2300,
        offer_price_bn: '২৩০০',
        price_per_month: 1250,
        price_per_month_bn: '১২৫০',
        price_saved: '২০০',
        course_done: '২১০',
        seat_left: '৮',
        next_batch: 'সেপ্টেম্বর',
        next_batch_eng: '2022-09-11T18:30:00.000+06:00',
        course_instructor: 'আতাউল হোসেন',
        instructor_designation: 'Head of Marketing at Skill Shikhun, Top Rated Freelancer on Fiverr',
        class_date: [
            {
                id: 1,
                date: '2022-05-13'
            },
            {
                id: 2,
                date: '2022-05-27'
            }
        ],
        class_time: '6.30PM - 7:30PM',
        class_date_1: '13, 15, 17 (August 2022)',
        class_date_1_value: '2022-08-13',
        class_date_1_deadline: '2022-08-13T18:30:00.000+06:00',
        // class_date_1_deadline:'July 30th 2022 6:30:00 pm',
        class_date_2: '6, 8, 10 (August 2022)',
        class_date_2_value: '2022-08-06',
        class_date_2_deadline: '2022-08-06T18:30:00.000+06:00',
        // class_date_2_deadline:'August 6th 2022, 6:00:00 pm',
        free_number: '92187931261',
        free_password: 'skill2022',
        free_video_count: '১৩',
        live_number: '84821206594',
        live_password: '865881',
        // free_link:'https://us06web.zoom.us/wc/92187931261/start',
        free_link: 'https://us06web.zoom.us/j/85672086625?pwd=cm5ubFIyZ2ZJWnYzTGlrYTNKUDdtZz09',
        // live_link:'https://zoom.us/wc/84821206594/start',
        live_link: 'https://us06web.zoom.us/j/83880494715?pwd=eW1aOUV3Y1B1Y2ZtbUtyWTZGMUNWdz09',
        instructor_image: dm_i,
        image: digitalImage,
        promo_poster:dm400,
        feature_alt: [
            {
                id: 1,
                item: 'এই কোর্সটি সম্পূর্ণ নতুনদের জন্য। এই কোর্সটি করার জন্য আপনার ডিজিটাল মার্কেটিং সম্পর্কে পূর্বের কোনও ধারনা থাকার দরকার নেই।'
            },
            {
                id: 2,
                item: 'এই কোর্সে মোট ২৪ টি ক্লাস হবে।'
            },
            {
                id: 3,
                item: 'সম্পূর্ণ কোর্সটি জুম এর মাধ্যমে লাইভ ক্লাস আকারে হবে।'
            },
            {
                id: 4,
                item: 'কোর্স এর ইন্সট্রাক্টর সরাসরি কোর্স সঙ্ক্রান্ত আপনার সকল  সমস্যার সমাধান করবে।'
            }
        ],
        features: [
            {
                id: 1,
                item: 'ডিজিটাল মার্কেটিং এর সাহায্যে ফ্রিল্যান্সিং এর মাধ্যমে ঘরে বসে যেভাবে আয় করতে পারবেন।'
            },
            {
                id: 2,
                item: 'লোকাল এবং ইন্টারন্যাশনাল মার্কেটে ডিজিটাল মার্কেটিং দক্ষতা কাজে লাগিয়ে যেভাবে ক্যারিয়ার গড়বেন।'
            },
            {
                id: 3,
                item: 'নিজস্ব ডিজিটাল মার্কেটিং এজেন্সি যেভাবে দাঁড় করাতে পারবেন।'
            },
            {
                id: 4,
                item: 'একটি অনলাইন ব্যাবসা একেবারে শুন্য থেকে যেভাবে প্রতিষ্ঠা এবং প্রসার করতে পারবেন।'
            }
        ],
        featuresDescription: 'এই কোর্সের শেষে আপনি আত্মবিশ্বাসের সাথে ডিজিটাল মার্কেটিং এর কৌশলগুলি কর্মক্ষেত্রে বাস্তবায়ন করতে পারবেন।',
        featureBonus: [
            {
                id: 1,
                item: 'দ্রুত ও বন্ধুত্বসুলভ প্রশ্নোত্তর ব্যবস্থা।'
            },
            {
                id: 2,
                item: 'সফলভাবে কোর্স সমাপ্তির পর ডাউনলোডযোগ্য ইউনিক সার্টিফিকেট।'
            }
        ],
        outline: [
            {
                id: 'One',
                title: 'ইন্ট্রডাকশন (Introduction)',
                description: 'এই ক্লাস এ আমরা একে অপরের সাথে পরিচিত হব এবং ডিজিটাল মার্কেটিং এর সম্পর্কে একটি বিস্তৃত ধারনা নিবো।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ১ - ইন্ট্রডাকশন (Introduction)',
                        videoId: 'L7BR8G0MmaA'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ২ - ডিজিটাল মার্কেটিং কি? (What is Digital Marketing?)',
                        videoId: 'JSsRm3VzkLs'
                    }
                ]
            },
            {
                id: 'Two',
                title: 'মার্কেট রিসার্চ (Market Research)',
                description: 'এই ক্লাসে আমরা শিখবো, মার্কেট রিসার্চ কি, কেন প্রয়োজন, এবং কিভাবে করবেন।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৩ - মার্কেট রিসার্চ কী? (What is Market Research?)',
                        videoId: 'T07JJrV1hss'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৪ - মার্কেট রিসার্চ প্রিরিকুইসিটি (Market Research Prerequisite)',
                        videoId: 'Hdf0lpcu4ws'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৫ - মার্কেট রিসার্চ ইউসিং ফেসবুক (Market Research using Facebook)',
                        videoId: 'tj958JVmUoU'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৬ - ইউসিং রেভিউস ফর মার্কেট রিসার্চ (Using Reviews for Market Research)',
                        videoId: 'aGUUSHer-kM'
                    }
                ]
            },
            {
                id: 'Three',
                title: 'ওয়েবসাইট তৈরি (Setting up a Website)',
                description: 'এই ক্লাসে আমরা শিখবো, কোন কোডিং নলেজ ছাড়াই ওয়ার্ডপ্রেস এর মাধ্যমে কিভাবে একটি ই-কমার্স ওয়েবসাইট তৈরি করা যায়।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৭ - ডোমেন কী? (What is Domain?)',
                        videoId: 'ibTNe2JFVfo'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৮ - হোস্টিং কী (What is Hosting?)',
                        videoId: '7jTbgO0Ay5Q'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৯ - কিভাবে ডোমেন এবং হোস্টিং কিনতে পারেন? (How to Buy Domain and Hosting?)',
                        videoId: 'lRRpf6YetLM'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ১০ - ওয়ার্ডপ্রেস কী? (What is Wordpress?)',
                        videoId: 'jh-438GHhTk'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ১১ - ওয়ার্ডপ্রেস কেন ব্যবহার করা উচিত?(Why should We use Wordpress?)',
                        videoId: 'ARKRRKvAz9k'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ১২ - সিপ্যানেল এর সাহায্যে ওয়ার্ডপ্রেস ইনস্টল(Wordpress Install from Cpanel.)',
                        videoId: 'C7GB9RT4spI'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ১৩ - থিম পরিবর্তন এবং ওয়েবসাইট এর পরিবর্তন (Theme Installation & Changing the Look Of the Website)',
                        videoId: 'Ul-sCZ3EKNM'
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৪ - Elementor, সেকশন এবং কলাম ব্যবহার করে আপনার সাইট কাস্টমাইজ করা (Customizing your Site using Elementor, Sections & Columns)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৫ - সেকশন এবং কলাম ব্যাখ্যা (Sections & Colums [Explained])',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৬ - আরও কাস্টমাইজেশন বিকল্প (More Customization Options!)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৭ - মার্জিন এবং প্যাডিং ব্যাখ্যা (Margin & Padding [Explained])',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৮ - এলিমেন্টর সাইডবার, ভিডিও এবং অন্যান্য উপাদান যোগ করা (Elementor Sidebar, Adding Video & Other Elements)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৯ - অ্যানিমেশন এবং ফিনিশিং এলিমেন্টর ওয়েবসাইট কাস্টমাইজেশন (Animations & Finishing Elementor Website Customizations)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২০ - প্লাগইন কি এবং কিভাবে প্লাগইন কাজ করে? (What are Plugins and How Plugins Work?)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২১ - অনুসন্ধান করুন এবং সেরা প্লাগইন খুঁজুন (Search & Find the Best Plugins)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২২ - ম্যানুয়াল বিকাশ পেমেন্ট গেটওয়ে ইনস্টল করা (Installing Manual Bkash Payment Gateway)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২৩ - কিভাবে অফিসিয়াল বিকাশ পেমেন্ট গেটওয়ে পাবেন (How to Get Official Bkash Payment Gateway)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২৪ - আপনার ওয়েবসাইটে একটি ফর্ম যোগ করা (Add a Form To Your Website)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২৫ - আপনার ওয়েবসাইটের থিম পরিবর্তন করা (Changing The Theme of your Website)',
                        videoId: ''
                    },
                ]
            },
            {
                id: 'Four',
                title: 'এস ই ও (SEO)',
                description: 'এই ক্লাসে আমরা শিখবো, এস.ই.ও এর মাধ্যমে আপনার নিজের বানানো ওয়েবসাইটকে কিভাবে গুগল সার্চ এর শীর্ষে নিয়ে আসবেন।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২৬ - (How to Change Themes, Removing Plugins & Intro to SEO)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২৭ - (Installing RankMath Plugin for SEO and SEO of Wordpress Website)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২৮ - (Installing Google Site Kit & Configuring Google Search Console)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২৯ - (How to Change Themes, Removing Plugins & Intro to SEO)',
                        videoId: ''
                    },
                ]
            },
            {
                id: 'Five',
                title: 'টেস্ট ১ (Quiz 1)',
                description: 'আমাদের প্রথম স্কিল্লটেস্ট নেয়া হবে পূর্বের চারটি টপিকের উপর। ',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৩০ - টেস্ট ১ (Test 1)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Six',
                title: 'কপিরাইটিং (Copywriting)',
                description: 'এই ক্লাসে আমরা শিখবো, কপিরাইটিং কি, কেন প্রয়োজন এবং কিভাবে করবেন। ',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৩১ - CopyWiriting - AIDA Formula',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Seven',
                title: 'ইমেইল মার্কেটিং (Email Marketing)',
                description: 'এই ক্লাসে আমরা শিখবো, ইমেইল মার্কেটিং কি, কেন প্রয়োজন এবং কিভাবে করবেন।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৩২ - (Email Marketing - Using Mailchimp & Convertful)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৩৩ - (How to Write Emails (Corporate & Marketing))',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৩৪ - Create an Email Marketing Campaign',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৩৫ - Finishing Your Email Marketing Campaign',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Eight',
                title: 'টেস্ট 2 (Quiz 2)',
                description: 'আমাদের দ্বিতীয় স্কিল্লটেস্ট নেয়া হবে পূর্বের দুইটি টপিকের উপর।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৩৬ - টেস্ট 2 (Test 2)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Nine',
                title: 'ফেইসবুক অ্যাড (Facebook Ads)',
                description: 'এই ক্লাসে আমরা শিখবো, কিভাবে সঠিক পদ্ধতিতে, অডিএন্স বাছাই করে, অ্যাড ক্যাম্পেইন তৈরি করে ফেইসবুকে বুস্টিং করতে হয়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৩৭ - (Introduction to Facebook Ads, Campaigns, Adsets)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৩৮ - (Facebook Ads 1)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Ten',
                title: 'ফেইসবুক মার্কেটিং (Facebook Marketing)',
                description: 'এই ক্লাসে আমরা শিখবো, কোনও ডলার খরচ না করে যেভাবে সম্পূর্ণ ফ্রিতে ফেইসবুকের দারা আপনার পণ্য অথবা সেবার মার্কেটিং করতে হয়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৩৯ - ফেইসবুক মার্কেটিং (Facebook Marketing)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Eleven',
                title: 'ইন্সটাগ্রাম মার্কেটিং (Instagram Marketing)',
                description: 'এই ক্লাসে আমরা শিখবো, যেভাবে ইন্সটাগ্রাম ব্যাবহার করে আপনার পণ্য অথবা সেবার মার্কেটিং করতে হয়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৪০ - ইন্সটাগ্রাম মার্কেটিং (Instagram Marketing)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Twelve',
                title: 'টেস্ট ৩ (Quiz 3)',
                description: 'আমাদের তৃতীয় স্কিল্লটেস্ট নেয়া হবে পূর্বের তিনটি টপিক এর উপর।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৪১ - টেস্ট ৩ (Test 3)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Thirteen',
                title: 'গুগল অ্যাড (Google Ads)',
                description: 'এই ক্লাসে আমরা শিখবো, কিভাবে গুগল সার্চ ও বিভিন্ন ওয়েবসাইট এবং অ্যাপ এ আপনার পণ্য অথবা সেবার অ্যাড দিতে হয়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৪২ - গুগল অ্যাড (Google Ads)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Fourteen',
                title: 'গুগল অ্যানালিটিক্স (Google Analytics)',
                description: 'এই ক্লাসে আমরা শিখবো, কিভাবে গুগল অ্যানালিটিক্স এর মাধ্যমে আপনার ওয়েবসাইট এর সকল তথ্য যাচাই করে আপনার সেলস পারফরমেন্স ট্র্যাক করতে পারবেন।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৪৩ - গুগল অ্যানালিটিক্স (Google Analytics)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Fifteen',
                title: 'ইউটিউব মার্কেটিং (Youtube Marketing)',
                description: 'এই ক্লাসে আমরা শিখবো, কিভাবে ইউটিউব এর মাধ্যমে আপনার পণ্য অথবা সেবার মার্কেটিং করতে পারবেন।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৪৪ - ইউটিউব মার্কেটিং (Youtube Marketing)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Sixteen',
                title: 'লিঙ্কডইন মার্কেটিং (LinkedIn Marketing)',
                description: 'এই ক্লাসে আমরা শিখবো কিভাবে লিঙ্কডইন এর মাধ্যমে আপনার পণ্য অথবা সেবার মার্কেটিং করতে পারবেন।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৪৫ - লিঙ্কডইন মার্কেটিং (LinkedIn Marketing)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Seventeen',
                title: 'ফাইনাল টেস্ট (Final Quiz)',
                description: 'আমাদের চতুর্থ ও ফাইনাল স্কিল্লটেস্টটি নেয়া হবে পূর্বের সকল টপিকের উপর।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৪৬ - ফাইনাল টেস্ট (Final Test)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Eighteen',
                title: 'উপসংহার (Conclusion)',
                description: 'এই ক্লাসে আমরা আলোচনা করবো কিভাবে আমাদের স্কিল্লকে কাজে লাগিয়ে অনলাইন মার্কেটপ্লেস এ কাজ করতে হয় এবং ফ্রীলান্সিং এর মাধ্যমে আয় করতে হয়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৪৭ - উপসংহার (Conclusion)',
                        videoId: ''
                    }
                ]
            }
        ]
    },
    // Graphics Design
    {
        name: 'Graphics Design',
        id: 'graphics-design',
        title: 'গ্রাফিক্স ডিজাইন',
        slug: 'Graphics Design',
        route: '/graphics-design',
        alt_title: 'গ্রাফিক্স ডিজাইন (বেসিক থেকে প্রফেশনাল)',
        description: 'গ্রাফিক্স ডিজাইনিং শিখে আপনার সৃজনশীলতাকে কাজে লাগিয়ে ঘরে বসেই আয় করতে চান? তবে আপনার জন্য সেরা মাধ্যম হবে এই কোর্সটি। বর্তমানে ফ্রীল্যান্সিং জগতে যেমন গ্রাফিক্স ডিজাইনিং একটি বিপুল জনপ্রিয় আয় করার ক্ষেত্র তেমনি ক্যারিয়ার হিসেবেও এর চাহিদা প্রচুর। আর এ সব কিছু মাথায় রেখেই সাজানো হয়েছে আমাদের গ্রাফিক্স ডিজাইনিং (বেসিক থেকে প্রোফেশনাল) কোর্সটি।',
        short_description: 'বর্তমানে ফ্রীল্যান্সিং জগতে একটি বিপুল জনপ্রিয় আয় করার ক্ষেত্র গ্রাফিক্স ডিজাইনিং শিখে আপনার সৃজনশীলতাকে কাজে লাগিয়ে ঘরে বসেই আয় করতে চান?',
        source: 'https://www.youtube.com/embed/BzDZnpkknrc?autoplay=1&mute=1',
        videoId: 'BzDZnpkknrc',
        type: 'Live',
        course_duration: '৩',
        course_duration_eng: 3,
        total_classes: '৩৬',
        regular_price: '৯,৯৯৯',
        price: 3750,
        price_bn: '৩৭৫০',
        offer_price: 3500,
        offer_price_bn: '৩৫০০',
        price_per_month: 1250,
        price_per_month_bn: '১২৫০',
        price_saved: '২৫০',
        course_done: '১৩৯',
        seat_left: '১৪',
        next_batch: 'সেপ্টেম্বর',
        next_batch_eng: '2022-09-11T07:45:00.000+06:00',
        course_instructor: 'সায়মা বিবি',
        instructor_designation: 'Former Junior Lecturer at Shanto-Mariam University of Creative Technology, Freelance Creative Designer',
        class_date: [
            {
                id: 1,
                date: '2022-05-20'
            },
            {
                id: 2,
                date: '2022-03-06'
            }
        ],
        class_time: '8:00PM - 9:00PM',
        class_date_1: '6, 8, 10 (August 2022)',
        class_date_1_value: '2022-08-06',
        class_date_1_deadline: '2022-08-06T20:00:00.000+06:00',
        // class_date_1_deadline:'July 30th 2022, 7:45:00 pm',
        class_date_2: '6, 8, 10 (August 2022)',
        class_date_2_value: '2022-08-06',
        class_date_2_deadline: '2022-08-06T20:00:00.000+06:00',
        // class_date_2_deadline:'August 6th 2022, 7:45:00 pm',
        free_number: '96089920440',
        free_password: '751521',
        free_video_count: '৩',
        live_number: '87039970025',
        live_password: '071289',
        // free_link:'https://zoom.us/wc/96089920440/start',
        free_link: 'https://us06web.zoom.us/j/96089920440?pwd=Z003Um5VV0RsZHloblJoN3JtL013dz09',
        // live_link:'https://zoom.us/wc/87039970025/start',
        live_link: 'https://us06web.zoom.us/j/87943558014?pwd=N0VhVXByWmY4OXlqaVZYSGh3NTJ2Zz09',
        instructor_image: gd_i,
        image: graphicsImage,
        promo_poster:gd400,
        feature_alt: [
            {
                id: 1,
                item: 'এই কোর্সটি সম্পূর্ণ নতুনদের জন্য। গ্রাফিক্স ডিজাইনিং সম্পর্কে আপনার পূর্ব কোনো ধারনা থাকার দরকার নেই। '
            },
            {
                id: 2,
                item: 'ইন্টারনেট কানেকশন সহ একটি কম্পিউটার।'
            },
            {
                id: 3,
                item: 'একটি কোর্সের ভিতর পাচ্ছেন জুম এর মাধ্যমে লাইভ ক্লাস আকারে মোট ৩৬ টি ক্লাস।'
            },
            {
                id: 4,
                item: 'কোর্স ইন্সট্রাক্টর কর্তৃক সরাসরি কোর্স সংক্রান্ত আপনার সকল সমস্যার সমাধানের সুব্যবস্থা।'
            }
        ],
        features: [
            {
                id: 1,
                item: 'Photoshop এবং Illustrator ব্যবহার করে নিজের সৃজনশীলতা যেভাবে কম্পিউটারের পর্দায় ফুটিয়ে তুলবেন।'
            },
            {
                id: 2,
                item: 'গ্রাফিক ডিজাইনার হিসেবে যেভাবে ক্যারিয়ার শুরু করবেন।'
            },
            {
                id: 3,
                item: 'ফ্রীল্যান্সিং জগতে যেভাবে একজন দক্ষ গ্রাফিক ডিজাইনার হিসেবে নিজেকে প্রতিষ্ঠিত করবেন।'
            },
            {
                id: 4,
                item: 'রিমোট জব এর মাধ্যমে যেভাবে ঘরে বসেই আয় করবেন।'
            }
        ],
        featuresDescription: '৩ মাসে ৩৬ টি ক্লাসের এই কোর্সটি সাজানো হয়েছে যেন সহজভাবে গ্রাফিক্স ডিজাইনিং এর প্রধান বিষয়গুলো নিয়ে আলোচনা করা হয় এবং সেগুলোর উপর কুইজ ও রিয়েল লাইফ আসাইনমেন্ট এর মাধ্যমে হাতে-কলমে নিজেকে যাচাই করা যায়।',
        featureBonus: [
            {
                id: 1,
                item: 'দ্রুত ও বন্ধুত্বসুলভ প্রশ্নোত্তর ব্যবস্থা।'
            },
            {
                id: 2,
                item: 'সফলভাবে কোর্স সমাপ্তির পর ডাউনলোডযোগ্য ইউনিক সার্টিফিকেট।'
            }
        ],
        outline: [
            {
                id: 'One',
                title: 'সূচনা (Introduction)',
                description: 'এই ক্লাসটি হবে মূলত আমার এবং শিক্ষার্থীদের পরিচয়পর্ব। আমি নিজেকে পরিচয় করিয়ে দিব- আমি কে, আমি বিভিন্ন প্ল্যাটফর্মে গ্রাফিক্স ডিজাইনিং এর মাধ্যমে কীভাবে আয় করছি, একইসাথে শিক্ষার্থীদের সম্পর্কে জানবো যা উপযুক্ত পরিবেশে শেখানোর জন্য যোগাযোগ গুরুত্বপূর্ণ।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ১ - সূচনা (Introduction)',
                        videoId: 'ePpS8gKVVlc'
                    }
                    // ,
                    // {
                    //     isFree: true,
                    //     subtitle: 'ক্লাস ২',
                    //     videoId: 'mP3t9ZQBfrA'
                    // },
                    // {
                    //     isFree: true,
                    //     subtitle: 'ক্লাস ৩',
                    //     videoId: '0IMkqySBMig'
                    // }
                ]
            },
            {
                id: 'Two',
                title: 'ফ্রিল্যান্সিং এবং গ্রাফিক্স (Freelancing and Graphics)',
                description: 'এই ক্লাসে আমরা গ্রাফিক্স ডিজাইনিং এর বেসিক সম্পর্কে শিখবো এবং ফ্রিল্যান্সিং ক্ষেত্রে গ্রাফিক্স ডিজাইনিং কীভাবে ব্যবহার হয় তা জানবো।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ২ - ফ্রিল্যান্সিং এবং গ্রাফিক্স (Freelancing and Graphics)',
                        videoId: 'mP3t9ZQBfrA'
                    }
                ]
            },
            {
                id: 'Three',
                title: 'গ্রাফিক্স সফটওয়্যার ইনস্টলেশন (Graphics Software Installation)',
                description: 'এই ক্লাসে আমরা এই কোর্সে ব্যবহৃত সফটওয়্যার (Photoshop এবং Illustrator) এর ইনস্টলেশন শিখবো এবং এগুলোর কাজের বিস্তার সম্পর্কে ধারণা নিবো।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৩ - গ্রাফিক্স সফটওয়্যার ইনস্টলেশন (Graphics Software Installation)',
                        videoId: '0IMkqySBMig'
                    }
                ]
            },
            {
                id: 'Four',
                title: 'ডকুমেন্ট স্পেসিফিকেশন এবং আর্টবোর্ড (Document Specification and Artboard)',
                description: 'এই ক্লাসে আমরা ডকুমেন্ট স্পেসিফিকেশন তৈরি করা শিখবো এবং আর্টবোর্ড সম্পর্কে আলোচনা করবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৪ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Five',
                title: 'মেনুবার, টুলবার এবং স্ট্যাটাস বার (Menu bar, Toolbar and Status bar)',
                description: 'এই ক্লাসে আমরা মেনুবার, টুলবার এবং স্ট্যাটাস বার সম্পর্কে শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৫ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Six',
                title: 'শেইপ এবং লোগো (Shape and Logo)',
                description: 'এই ক্লাসে আমরা শেইপ তৈরি করা এবং সেগুলোর সাহায্যে কীভাবে বিভিন্ন লোগো বানানো যায় তা শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৬ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Seven',
                title: 'টেক্সট এবং টাইপোগ্রাফি, টাইপস কেস (Text and Typography, Types Case)',
                description: 'এই ক্লাসে আমরা টেক্সট ও টাইপোগ্রাফি সম্পর্কে জানবো এবং টাইপস কেস শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৭ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Eight',
                title: 'টেক্সট দিয়ে পোস্টার (Poster with Texts)',
                description: 'এই ক্লাসে আমরা শিখবো কীভাবে টেক্সট দিয়ে পোস্টার তৈরি করা যায়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৮ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Nine',
                title: 'পেন টুলস এবং ইমেইজ ট্রেসিং (Pen Tools and Image Tracing)',
                description: 'এই ক্লাসে আমরা শিখবো কীভাবে টেক্সট দিয়ে পোস্টার তৈরি করা যায়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ৯ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Ten',
                title: 'কালার থিওরি এবং কালার সিলেক্ট (Color Theory and Color Select)',
                description: 'এই ক্লাসে আমরা কালার থিওরি সম্পর্কে জানবো এবং কোন কাজে কি কালার সিলেক্ট করা উচিত তা শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১০ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Eleven',
                title: 'প্যারাগ্রাফ এবং ম্যাগাজিনের পেজ লেআউট (Paragraph and Magazine Page Layout)',
                description: 'এই ক্লাসে আমরা প্যারাগ্রাফ সম্পর্কে জানবো এবং ম্যাগাজিনের পেজ লেআউট বানানো শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১১ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Twelve',
                title: 'গ্রেডিয়েন্ট এবং গ্রেডিয়েন্ট দিয়ে ব্যাকগ্রাউন্ড (Gradient and Background With Gradient)',
                description: 'এই ক্লাসে আমরা গ্রেডিয়েন্ট সম্পর্কে জানবো এবং গ্রেডিয়েন্ট দিয়ে ব্যাকগ্রাউন্ড তৈরি করা শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১২ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Thirteen',
                title: 'ব্রাশ টুল (Brush Tool)',
                description: 'এই ক্লাসে আমরা বিভিন্ন ব্রাশ টুল, এর ধরন এবং ব্যবহার সম্পর্কে শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৩ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Fourteen',
                title: 'স্কেল টুল এবং সুষম ডিজাইন তৈরি (Scale Tool and Equivalent Design)',
                description: 'এই ক্লাসে আমরা স্কেল টুল সম্পর্কে শিখবো এবং বিভিন্ন সুষম ডিজাইন তৈরি করবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৪ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Fifteen',
                title: 'স্ট্রোক এবং পাথ ডেফিনেশন (Stroke and Path Definition)',
                description: 'এই ক্লাসে আমরা স্ট্রোক এবং পাথ ডেফিনেশন সম্পর্কে শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৫ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Sixteen',
                title: 'গ্রুপ,এক্সপান্ডিং আর লেয়ার (Group Expanding and Layer)',
                description: 'এই ক্লাসে আমরা গ্রুপ,এক্সপান্ডিং সম্পর্কে শিখবো এবং লেয়ার নিয়ে আলোচনা করবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৬ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Seventeen',
                title: 'অবজেক্ট শ্যাডো,টেক্সট শ্যাডো (Object Shadow and Text Shadow)',
                description: 'এই ক্লাসে আমরা অবজেক্ট শ্যাডোন ও টেক্সট শ্যাডো সম্পর্কে শিখবো এবং ডিজাইনে এর ব্যবহার নিয়ে জানবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৭ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Eighteen',
                title: 'এলাইনমেন্ট এবং এড ডিজাইন তৈরি (Alignment and Ad Design making)',
                description: 'এই ক্লাসে আমরা এলাইনমেন্ট সম্পর্কে আলোচনা করবো এবং তা ব্যবহার করে এড ডিজাইন তৈরি করা শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৮ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Nineteen',
                title: 'কালার মোড প্রিন্ট এবং ডিজিটাল মিডিয়া Color Mode Print and Digital Media)',
                description: 'এই ক্লাসে আমরা কালার মোড প্রিন্ট এবং ডিজিটাল মিডিয়া সম্পর্কে বিস্তর আলোচনা করবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৯ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Tweenty',
                title: 'লোগো তৈরি (Logo Making)',
                description: 'এই ক্লাসে আমরা প্রফেশনাল লোগো তৈরি করা শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২০ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Tweentyone',
                title: 'বিজনেস কার্ড তৈরি (Business Card Making)',
                description: 'এই ক্লাসে আমরা বিজনেস কার্ড তৈরি তৈরি করা শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২১ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Tweentytwo',
                title: 'ফেইসবুক পোস্ট (Facebook Post)',
                description: 'এই ক্লাসে আমরা গ্রাফিক্স ডিজাইনিং এর সাহায্যে বিভিন্ন চমকপ্রদ ফেইসবুক পোস্ট তৈরি করা শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২২ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Tweentythree',
                title: 'ব্যানার তৈরি (Banner Making)',
                description: 'এই ক্লাসে আমরা প্রফেশনাল ব্যানার তৈরি করা শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২৩ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Tweentyfour',
                title: 'পোস্টার তৈরি (Poster Making)',
                description: 'এই ক্লাসে আমরা প্রফেশনাল পোস্টার তৈরি করা শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২৪ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Tweentyfive',
                title: 'এক্স ব্যানার তৈরি (Ex Banner Making)',
                description: 'এই ক্লাসে আমরা এক্স ব্যানার তৈরি করা শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২৫ - ',
                        videoId: ''
                    }
                ]
            }
        ]
    },
    // Web Development
    {
        name: 'Web Development',
        id: 'web-development',
        title: 'ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট',
        slug: 'Full Stack Web Development',
        route: '/web-development',
        alt_title: 'ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট (জিরো টু হিরো)',
        description: 'আপনি যদি একজন পেশাদার ওয়েব ডেভেলপার হতে চান বা ওয়েব ডেভেলপমেন্টের এর জগতে নিজেকে প্রতিষ্ঠিত করতে চান তবে এই কোর্সটি আপনারই জন্য। কোর্সটি বিশেষভাবে ডিজাইন করা হয়েছে সমস্ত আধুনিক ওয়েব ডেভেলপমেন্ট টেকনোলজির সমন্বয়ে যে দক্ষতাগুলোর মার্কেটপ্লেস এবং প্রযুক্তি কোম্পানিগুলোর রয়েছে বিশাল চাহিদা।',
        short_description: 'আপনি যদি একজন পেশাদার ওয়েব ডেভেলপার হতে চান বা ওয়েব ডেভেলপমেন্টের এর জগতে নিজেকে প্রতিষ্ঠিত করতে চান তবে এই কোর্সটি আপনারই জন্য।',
        source: 'https://www.youtube.com/embed/TIxJqXhIvpc?autoplay=1&mute=1',
        videoId: 'TIxJqXhIvpc',
        type: 'Live',
        course_duration: '৩',
        course_duration_eng: 3,
        total_classes: '৩৬',
        regular_price: '৯,৯৯৯',
        price: 3750,
        price_bn: '৩৭৫০',
        offer_price: 3500,
        offer_price_bn: '৩৫০০',
        price_per_month: 1250,
        price_per_month_bn: '১২৫০',
        price_saved: '২৫০',
        course_done: '২৩৪',
        next_batch: 'সেপ্টেম্বর',
        next_batch_eng: '2022-09-11T09:00:00.000+06:00',
        seat_left: '১১',
        course_instructor: 'ইফতিখার রহমান',
        instructor_designation: 'Head of Development at Step 2 Digital, Senior Web Developer at Skill Shikhun',
        class_date: [
            {
                id: 1,
                date: '2022-05-20'
            },
            {
                id: 2,
                date: '2022-03-06'
            }
        ],
        class_time: '10:30PM - 12:00PM',
        class_date_1: '6, 8, 10 (August 2022)',
        class_date_1_value: '2022-08-06',
        class_date_1_deadline: '2022-08-06T22:30:00.000+06:00',
        // class_date_1_deadline:'July 30th 2022, 9:00:00 pm',
        class_date_2: '6, 8, 10 (August 2022)',
        class_date_2_value: '2022-08-06',
        class_date_2_deadline: '2022-08-06T22:30:00.000+06:00',
        // class_date_2_deadline:'August 6th 2022, 9:00:00 pm',
        free_number: '83489456820',
        free_password: '297121',
        free_video_count: '১২',
        live_number: '85770635754',
        live_password: '351625',
        // free_link:'https://us06web.zoom.us/wc/83489456820/start',
        free_link: 'https://us06web.zoom.us/j/83489456820?pwd=SjNTaTVnQkNEWkdtaXRXcW13VWVXZz09',
        // live_link:'https://zoom.us/wc/85770635754/start',
        live_link: 'https://us06web.zoom.us/j/83444144897?pwd=L0pOVEF1U2VPemo3SUdjUjhSNExNZz09',
        instructor_image: wd_i,
        image: webImage,
        promo_poster: wd400,
        feature_alt: [
            {
                id: 1,
                item: 'এই কোর্সটি সম্পূর্ণ নতুনদের জন্য। ওয়েব ডেভেলপমেন্ট সম্পর্কে আপনার পূর্ব কোনো ধারনা থাকার দরকার নেই।'
            },
            {
                id: 2,
                item: 'ইন্টারনেট কানেকশন সহ একটি কম্পিউটার।'
            },
            {
                id: 3,
                item: 'একটি কোর্সের ভিতর পাচ্ছেন জুম এর মাধ্যমে লাইভ ক্লাস আকারে মোট ২৪ টি ক্লাস।'
            },
            {
                id: 4,
                item: 'কোর্স ইন্সট্রাক্টর কর্তৃক সরাসরি কোর্স সংক্রান্ত আপনার সকল সমস্যার সমাধানের সুব্যবস্থা।'
            }
        ],
        features: [
            {
                id: 1,
                item: 'ওয়েব ডেভেলপমেন্ট ব্যবহার করে যেভাবে ক্যারিয়ার গড়বেন।'
            },
            {
                id: 2,
                item: 'রিয়েক্ট এবং নোডের মতো উন্নত প্রযুক্তি ব্যবহার করে যেভাবে নিজস্ব ওয়েব অ্যাপ্লিকেশন তৈরি করবেন।'
            },
            {
                id: 3,
                item: 'ওয়েব ডেভেলপমেন্ট ব্যবহার করে যেভাবে ফ্রীল্যান্সিং এর মাধ্যমে আয় করবেন।'
            },
            {
                id: 4,
                item: 'প্রোগ্রামিং এর মাধ্যমে যেভাবে নিজের দক্ষতা বাড়াবেন।'
            }
        ],
        featuresDescription: '৩ মাসে ৩৬ টি ক্লাসের ওয়েব ডেভেলপমেন্ট কোর্সটি সাজানো হয়েছে যেন এই কোর্সের শেষে আপনি একজন দক্ষ ওয়েব ডেভেলপার হিসেবে নিজেকে প্রতিষ্ঠিত করতে পারবেন',
        featureBonus: [
            {
                id: 1,
                item: 'দ্রুত ও বন্ধুত্বসুলভ প্রশ্নোত্তর ব্যবস্থা।'
            },
            {
                id: 2,
                item: 'সফলভাবে কোর্স সমাপ্তির পর ডাউনলোডযোগ্য ইউনিক সার্টিফিকেট।'
            }
        ],
        outline: [
            {
                id: 'One',
                title: 'সূচনা (Introduction)',
                description: 'এই ক্লাসটি হবে মূলত আমার এবং শিক্ষার্থীদের পরিচয়পর্ব। আমি নিজেকে পরিচয় করিয়ে দিব- আমি কে, আমি বিভিন্ন প্ল্যাটফর্মে ওয়েব ডেভেলপমেন্ট এর মাধ্যমে কীভাবে আয় করছি, একইসাথে শিক্ষার্থীদের সম্পর্কে জানবো যা উপযুক্ত পরিবেশে শেখানোর জন্য যোগাযোগ গুরুত্বপূর্ণ।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ১ - সূচনা (Introduction)',
                        videoId: '9J9CUJlIu3k'
                    }
                ]
            },
            {
                id: 'Two',
                title: 'এইচ টি এম এল ৫ (HTML5)',
                description: 'আমরা কোর্সটি শুরু করবো ওয়েব ডেভেলপমেন্ট এর বেসিক শেখার এবং HTML5 কোড লেখার জন্য প্রয়োজনীয় টুল ইন্সটল করার মাধ্যমে। এই ক্লাসে আমরা HTML5 এর প্রায় সব ধারণা শিখবো এবং ওয়েবপেজে HTML উপাদানগুলোর গঠন বিন্যাস কিভাবে সাজাবো তা শিখবো।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ২ - এইচ টি এম এল ৫ (HTML5)',
                        videoId: 'roPdqQ4X0n0'
                    }
                ]
            },
            {
                id: 'Three',
                title: 'সিএসএস 3 (CSS3)',
                description: 'এই ক্লাসে আমরা CSS3 এর মৌলিক বিষয়গুলি শিখবো যা আমাদের ওয়েবসাইট তৈরি এবং আকর্ষণীয় করতে সাহায্য করবে। এছাড়াও আমরা শিখবো কিভাবে আপনার বিদ্যমান HTML পেজগুলোতে CSS যোগ করে আরো আকর্ষণীয় করতে পারি।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৩ - এইচ টি এম এল ৫ (HTML5) এবং সিএসএস 3 (CSS3)',
                        videoId: '3EJEZgnoiUM'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৪ - সিএসএস 3 (CSS3)',
                        videoId: 'D6TVgqIT4mA'
                    }
                ]
            },
            {
                id: 'Four',
                title: 'প্রফেশনাল ওয়েবসাইট তৈরি (Building A Professional Website)',
                description: 'এই ক্লাসে আমরা আমাদের এই পর্যন্ত শেখা দক্ষতাকে কাজে লাগিয়ে HTML এবং CSS সহ একটি পোর্টফোলিও সাইট তৈরি করব।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৫ - পোর্টফোলিও ওয়েবসাইট প্রজেক্ট পার্ট ১ (Portfolio Website Project Part 1)',
                        videoId: 'b_QJ2m_xDIE'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৬ - পোর্টফোলিও ওয়েবসাইট প্রজেক্ট পার্ট ২ (Portfolio Website Project Part 2)',
                        videoId: 'WNgRyuKum8A'
                    }
                ]
            },
            {
                id: 'Five',
                title: 'গিট, গিটহাব এবং হোস্টিং (Git, GitHub, Hosting)',
                description: 'এই ক্লাসে আমরা সারা বিশ্ব জুড়ে ওয়েব ডেভেলপারদের মধ্যে সবচেয়ে জনপ্রিয় টুল গিট এবং গিটহাব সম্পর্কে জানবো। Git এবং কিভাবে Git সংস্করণ নিয়ন্ত্রণের জন্য ব্যবহার করা যেতে পারে, Git এর সাথে কাজ করার জন্য প্রয়োজনীয় গুরুত্বপূর্ণ কমান্ড এবং GitHub এর সহযোগিতায় দলগত প্রজেক্ট এর কাজের সুবিধাগুলো শিখবো।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৭ - গিট, গিটহাব এবং হোস্টিং (Git, GitHub, Hosting)',
                        videoId: '8ukjw7v4ErA'
                    }
                ]
            },
            {
                id: 'Six',
                title: 'বুটস্ট্র্যাপ 5 (Bootstrap 5)',
                description: 'এই ক্লাসে আমরা বুটস্ট্র্যাপ 5 এবং বুটস্ট্র্যাপ গ্রিড সিস্টেম সম্পর্কে জানবো এবং এটির সাহায্যে কীভাবে প্রতিক্রিয়াশীল লেআউট তৈরি করতে হয় তা শিখবো।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৮ - বুটস্ট্র্যাপ 5 পার্ট ১ (Bootstrap 5 Part 1)',
                        videoId: '54qYgoDWcZ8'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৮ - বুটস্ট্র্যাপ 5 পার্ট ২ (Bootstrap 5 Part 2)',
                        videoId: 'VQKd6WVteTU'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ৯ - ব্লগ ওয়েবসাইট প্রজেক্ট (Blog Website Project)',
                        videoId: 'CMCnsy_w9Xs'
                    },
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ১০ - মুভি ল্যান্ডিং পেজ প্রজেক্ট (Movie Landing Page Project)',
                        videoId: 'ZafP43Oduas'
                    }
                ]
            },
            {
                id: 'Seven',
                title: 'ই-কমার্স ওয়েবসাইট তৈরি (Building an E-commerce Website)',
                description: 'এই ক্লাসে আমরা CSS এর সাহায্য ছাড়াই সম্পূর্ণরূপে বুটস্ট্র্যাপ এবং এর উপাদানগুলি ব্যবহার করে সম্পূর্ণরূপে মোবাইল প্রতিক্রিয়াশীল ওয়েবসাইট তৈরি করবো যা কম্পিউটার, ট্যাবলেট এবং স্মার্টফোনের মতো সমস্ত ডিভাইসে কাজ করবে এবং দেখতে চমৎকার হবে।',
                isFree: true,
                video: [
                    {
                        isFree: true,
                        subtitle: 'ক্লাস ১১ - ই-কমার্স ওয়েবসাইট তৈরি (Building an E-commerce Website)',
                        videoId: 'Z2SQX_3VNYg'
                    }
                ]
            },
            {
                id: 'Eight',
                title: 'জাভাস্ক্রিপ্ট (JavaScript)',
                description: 'এই ক্লাসে আমরা ফ্রন্ট এন্ড ওয়েব ডেভেলপমেন্টের সবচেয়ে জনপ্রিয় ভাষা, জাভাস্ক্রিপ্ট এর বেসিক সকল খুঁটিনাটি শিখবো ।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১২ - জাভাস্ক্রিপ্ট স্ট্রিং, নাম্বারস (JavaScript String, Number)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৩ - জাভাস্ক্রিপ্ট এরে, কন্ডিশনাল স্টেটমেন্টস, ফর লুপ, ওয়াইল লুপ, ফাঙ্কশন, অব্জেক্টস, সুইচ (JavaScript Array, Conditional Statements, For Loop, While Loop, Object, Function, Switch)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৪ - জাভাস্ক্রিপ্ট প্রব্লেম সলভিং (JavaScript Problem Solving)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৫ - জাভাস্ক্রিপ্ট রিয়েল লাইফ প্রব্লেম সলভিং (JavaScript Real Life Problem Solving)',
                        videoId: ''
                    },
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৬ - জাভাস্ক্রিপ্ট ডোম, ইভেন্টস, ইভেন্ট বাবল (JavaScript DOM, Event, Event Bubbling)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Nine',
                title: 'ইএস৬ (ES6)',
                description: 'এই ক্লাসে আমরা জাভাস্ক্রিপ্ট এর সর্বশেষ সংস্করণ ES6 সম্পর্কে শিখবো এবং এর নতুন ফিচারগুলো সম্পর্কে জানবো। ',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৮ - ইএস৬ (ES6)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Ten',
                title: 'ইন্টের‍্যাক্টিভ ওয়েবসাইট (Interactive Website)',
                description: 'এই ক্লাসে আমরা জাভাস্ক্রিপ্ট এবং বুটস্ট্র্যাপ ব্যবহার করে একটি সাধারণ ইন্টারেক্টিভ ওয়েবসাইট তৈরি করা শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৭ - বার্থডে কাউন্টডাউন প্রজেক্ট (Birthday Countdown Project) এবং সিম্পল জাভাস্ক্রিপ্ট বুটস্ট্র্যাপ শপিং কার্ট প্রজেক্ট (Simple JavaScript Bootstrap Shopping Cart Project)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Eleven',
                title: 'এপিআই, জেএসওএন, সার্ভার, ডেটা লোড, ডাইনামিক ওয়েবসাইট এবং এইচটিটিপি (API JSON, Server, Data Load, Dynamic Website, http)',
                description: 'এই ক্লাসে আমরা এপিআই, জেএসওএন, সার্ভার, ডেটা লোড, ডাইনামিক ওয়েবসাইট এবং এইচটিটিপি সম্পর্কে জানবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ১৯ - এপিআই, জেসন স্ট্রিংগিফাই, পার্স, গেট, পোস্ট মেথড',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Twelve',
                title: 'এপিআই ব্যবহার করে ওয়েবসাইট তৈরি (Building a Website Using API)',
                description: 'এই ক্লাসে আমরা এপিআই ব্যবহার করে একটি ওয়েবসাইট তৈরি করবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২০ - রেন্ডম এপিআই, COVID-19 প্রজেক্ট (Rendom API, COVID-19 Project)',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Thirteen',
                title: 'রিয়েক্ট জেএস (ReactJS)',
                description: 'এই ক্লাসে আমরা ReactJS সম্পর্কে শিখব যা একটি প্রগতিশীল ফ্রন্ট-এন্ড লাইব্রেরি যা আপনাদেরকে দক্ষ উপায়ে ইউজার ইন্টারফেস উপাদান তৈরি করতে সাহায্য করে।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২১ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Fourteen',
                title: 'রিয়েক্ট অথেনটিকেশন (ফায়ারবেস) (React Authentication (Firebase)',
                description: 'এই ক্লাসে আমরা রিয়েক্ট অথেনটিকেশন এবং এর ব্যবহার সম্পর্কে শিখবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২২ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Fifteen',
                title: 'রিয়েক্ট অথেনটিকেশন ব্যবহার করে ওয়েবসাইট তৈরি (Building a website using React Authentication)',
                description: 'এই ক্লাসে আমরা রিয়েক্ট অথেনটিকেশন ব্যবহার করে একটি ওয়েবসাইট তৈরি করবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২৩ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Sixteen',
                title: 'নোড জেএস (Node JS) এবং এক্সপ্রেস জেএস (Express JS)',
                description: 'এই ক্লাস থেকে আমরা ব্যাকএন্ড সম্পর্কে শেখা শুরু করবো। আমরা Node JS এর মূল বিষয়গুলি থেকে নোড এবং নোড জেএস এর ওয়েব ফ্রেমওয়ার্ক এক্সপ্রেস জেএস শেখা শুরু করব এবং নিজস্ব সার্ভার তৈরি করা শিখবো। আমরা নোড প্যাকেজ ম্যানেজার এবং কীভাবে এটি বিভিন্ন নোড প্যাকেজ ইনস্টল এবং ব্যবহার সম্পর্কেও জানবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২৪ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Seventeen',
                title: 'মঙ্গোডিবি (MongoDB)',
                description: 'এই ক্লাসে আমরা MongoDB সম্পর্কে জানবো যা একটি ডেটাবেস যেটি বৃহৎ সফ্টওয়্যার কোম্পানীগুলো দ্বারা ব্যবহৃত এবং বিশ্বস্ত। আমরা শিখবো কীভাবে স্ক্র্যাচ থেকে নিজস্ব ডেটাবেস তৈরি করতে হয় এবং কীভাবে আমাদের ডেটা সংরক্ষণ এবং পরিচালনা করার জন্য কাঠামো সেটআপ করতে হয়।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২৫ - ',
                        videoId: ''
                    }
                ]
            },
            {
                id: 'Eighteen',
                title: 'ফুল স্ট্যাক ওয়েবসাইট (Full Stack Website)',
                description: 'এই ক্লাসে আমরা পুরো কোর্সে যা কিছু শিখেছি তা প্রয়োগ করে একটি সম্পূর্ণ কার্যকরী ওয়েব অ্যাপ্লিকেশন নির্মাণ করবো।',
                isFree: false,
                video: [
                    {
                        isFree: false,
                        subtitle: 'ক্লাস ২৬ - ',
                        videoId: ''
                    }
                ]
            }
        ]
    }
];

export default courseData;