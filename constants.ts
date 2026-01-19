import { Event, EventCategory, Sponsorship, Integration, Exhibitor } from './types';

export const EVENTS_DATA: Event[] = [
  {
    "id": "1",
    "name": "Singapore International Water Week",
    "description": "Singapore International Water Week is a premier Water Technology event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Jun 2, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 25000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.siww.com.sg [1]",
    "tags": [
      "Water Technology",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "2",
    "name": "Food & Drinks Malaysia",
    "description": "Food & Drinks Malaysia is a premier Food & Beverage event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Jul 15, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 12000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.fooddrinksmalaysia.com [2]",
    "tags": [
      "Food & Beverage",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "3",
    "name": "Manufacturing Expo",
    "description": "Manufacturing Expo is a premier Manufacturing event held in Bangkok, Thailand. Join industry leaders and innovators at BITEC.",
    category: EventCategory.MANUFACTURING,
    "date": "Jun 19, 2025",
    "location": "BITEC, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 95000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.manufacturing-expo.com [3]",
    "tags": [
      "Manufacturing",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "4",
    "name": "TechXpo Indonesia",
    "description": "TechXpo Indonesia is a premier Technology event held in Jakarta, Indonesia. Join industry leaders and innovators at JIExpo.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Sep 10, 2025",
    "location": "JIExpo, Jakarta",
    "priceRange": "IDR 150,000",
    "basePrice": 150000,
    "currency": "IDR",
    "predictedTurnout": 18000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.techxpoindonesia.com [4]",
    "tags": [
      "Technology",
      "Indonesia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "5",
    "name": "Vietnam ICT COMM",
    "description": "Vietnam ICT COMM is a premier ICT/Telecom event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.ICT_TELECOM,
    "date": "Jun 5, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 15000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://ictcomm.vn [5]",
    "tags": [
      "ICT/Telecom",
      "Vietnam",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "6",
    "name": "Laos Build Expo",
    "description": "Laos Build Expo is a premier Construction event held in Vientiane, Laos. Join industry leaders and innovators at National Convention Centre.",
    category: EventCategory.CONSTRUCTION,
    "date": "Sep 18, 2025",
    "location": "National Convention Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 4000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.laosbuild.com [6]",
    "tags": [
      "Construction",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "7",
    "name": "Cambodia Int’l Machinery Fair",
    "description": "Cambodia Int’l Machinery Fair is a premier Industrial Machinery event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "Dec 2, 2025",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 3500,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cambodiamachineryfair.com [7]",
    "tags": [
      "Industrial Machinery",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "8",
    "name": "Myanmar Agri Expo",
    "description": "Myanmar Agri Expo is a premier Agriculture event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.AGRICULTURE,
    "date": "Aug 21, 2025",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 6000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.myanmaragriexpo.com [8]",
    "tags": [
      "Agriculture",
      "Myanmar",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "9",
    "name": "Singapore Airshow (Asia-Pacific)",
    "description": "Singapore Airshow (Asia-Pacific) is a premier Aerospace & Defense event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "Feb 18, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 65000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.singaporeairshow.com.sg [9]",
    "tags": [
      "Aerospace & Defense",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "10",
    "name": "Asia Tech x Singapore",
    "description": "Asia Tech x Singapore is a premier Tech & Innovation event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Jun 15, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 30000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.asiatechxsg.com [10]",
    "tags": [
      "Tech & Innovation",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "11",
    "name": "Franchise & Business Opportunities Expo",
    "description": "Franchise & Business Opportunities Expo is a premier Franchising event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at KLCC.",
    category: EventCategory.FRANCHISING,
    "date": "Mar 12, 2025",
    "location": "KLCC, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 15000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.franmalaysia.com [11]",
    "tags": [
      "Franchising",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1559136555-930d72f1d300?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "12",
    "name": "MIHAS Halal Expo",
    "description": "MIHAS Halal Expo is a premier Halal Products event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.HALAL,
    "date": "Apr 8, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 10000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.mihas.com.my [12]",
    "tags": [
      "Halal Products",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "13",
    "name": "Gulf Construction Expo",
    "description": "Gulf Construction Expo is a premier Construction event held in Bangkok, Thailand. Join industry leaders and innovators at Queen Sirikit.",
    category: EventCategory.CONSTRUCTION,
    "date": "May 5, 2025",
    "location": "Queen Sirikit, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 12000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.gulfconstructionexpo.com [13]",
    "tags": [
      "Construction",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "14",
    "name": "ASEAN Secur@ Exhibition",
    "description": "ASEAN Secur@ Exhibition is a premier Security & Defense event held in Bangkok, Thailand. Join industry leaders and innovators at Impact.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Jul 22, 2025",
    "location": "Impact, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 8000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.aseansecurity.com [14]",
    "tags": [
      "Security & Defense",
      "Thailand",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "15",
    "name": "Indonesia Mining Expo",
    "description": "Indonesia Mining Expo is a premier Mining & Minerals event held in Jakarta, Indonesia. Join industry leaders and innovators at ICE BSD.",
    category: EventCategory.MINING_MINERALS,
    "date": "Jul 1, 2025",
    "location": "ICE BSD, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 20000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.indonesiaminingexpo.com [15]",
    "tags": [
      "Mining & Minerals",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1614107151491-6876eecbff89?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "16",
    "name": "Food & Hotel Indonesia",
    "description": "Food & Hotel Indonesia is a premier Food & Beverage event held in Jakarta, Indonesia. Join industry leaders and innovators at JIExpo.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Mar 5, 2025",
    "location": "JIExpo, Jakarta",
    "priceRange": "IDR 150,000",
    "basePrice": 150000,
    "currency": "IDR",
    "predictedTurnout": 18000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.fhi.co.id [16]",
    "tags": [
      "Food & Beverage",
      "Indonesia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "17",
    "name": "Vietnam Foodexpo",
    "description": "Vietnam Foodexpo is a premier Food & Beverage event held in Hanoi, Vietnam. Join industry leaders and innovators at I.C.E.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Oct 10, 2025",
    "location": "I.C.E, Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 12000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.vietnamfoodexpo.com [17]",
    "tags": [
      "Food & Beverage",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "18",
    "name": "Vietbuild Construction",
    "description": "Vietbuild Construction is a premier Construction event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.CONSTRUCTION,
    "date": "Mar 15, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 25000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.vietbuildexpo.com [18]",
    "tags": [
      "Construction",
      "Vietnam",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "19",
    "name": "Laos Trade & Investment",
    "description": "Laos Trade & Investment is a premier Trade & Investment event held in Luang Prabang, Laos. Join industry leaders and innovators at Convention Center.",
    category: EventCategory.GENERAL_TRADE,
    "date": "Apr 20, 2025",
    "location": "Convention Center, Luang Prabang",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 3000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.laostradeinvestment.com [19]",
    "tags": [
      "Trade & Investment",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "20",
    "name": "Cambodia Real Estate Show",
    "description": "Cambodia Real Estate Show is a premier Property & Real Estate event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Cambodia-Japan Friendship Hall.",
    category: EventCategory.REAL_ESTATE,
    "date": "Jun 12, 2025",
    "location": "Cambodia-Japan Friendship Hall, Phnom Penh",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.camrealestateshow.com [20]",
    "tags": [
      "Property & Real Estate",
      "Cambodia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "21",
    "name": "Myanmar Energy Expo",
    "description": "Myanmar Energy Expo is a premier Energy event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.ENERGY,
    "date": "May 28, 2025",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 7000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.myanmarenergyexpo.com [21]",
    "tags": [
      "Energy",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "22",
    "name": "Singapore Airshow (Asia-Pacific)",
    "description": "Singapore Airshow (Asia-Pacific) is a premier Aerospace & Defense event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "Feb 18, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 65000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.singaporeairshow.com.sg [1]",
    "tags": [
      "Aerospace & Defense",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "23",
    "name": "Malaysia Technology Expo (MTE2025)",
    "description": "Malaysia Technology Expo (MTE2025) is a premier Technology & Innovation event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at World Trade Centre KL.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Feb 20, 2025",
    "location": "World Trade Centre KL, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 12000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://ifia.com/mte2025 [5]",
    "tags": [
      "Technology & Innovation",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "24",
    "name": "Trade Expo Indonesia (TEI)",
    "description": "Trade Expo Indonesia (TEI) is a premier General Trade event held in BSD City, Indonesia. Join industry leaders and innovators at Indonesia Convention Exhibition.",
    category: EventCategory.GENERAL_TRADE,
    "date": "Oct 15, 2025",
    "location": "Indonesia Convention Exhibition, BSD City",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 22000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.tradexpoindonesia.com [6]",
    "tags": [
      "General Trade",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "25",
    "name": "Manufacturing Expo",
    "description": "Manufacturing Expo is a premier Manufacturing event held in Bangkok, Thailand. Join industry leaders and innovators at BITEC.",
    category: EventCategory.MANUFACTURING,
    "date": "Jun 19, 2025",
    "location": "BITEC, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 95000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.manufacturing-expo.com [7]",
    "tags": [
      "Manufacturing",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "26",
    "name": "Vietnam International Trade Fair (Vietnam Expo)",
    "description": "Vietnam International Trade Fair (Vietnam Expo) is a premier General Trade event held in Hanoi, Vietnam. Join industry leaders and innovators at I.C.E.",
    category: EventCategory.GENERAL_TRADE,
    "date": "Apr 2, 2025",
    "location": "I.C.E, Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 20000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://vneconomy.vn/vietnam-expo-2025 [8]",
    "tags": [
      "General Trade",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "27",
    "name": "Singapore International Water Week",
    "description": "Singapore International Water Week is a premier Water Technology event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Jun 23, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 25000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.siww.com.sg [1]",
    "tags": [
      "Water Technology",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "28",
    "name": "Asia Tech x Singapore",
    "description": "Asia Tech x Singapore is a premier Technology & Innovation event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Jun 15, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 30000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.asiatechxsg.com [1]",
    "tags": [
      "Technology & Innovation",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "29",
    "name": "International Luxury Travel Market Asia Pacific (ILTM Asia Pacific)",
    "description": "International Luxury Travel Market Asia Pacific (ILTM Asia Pacific) is a premier Luxury Travel event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Jun 30, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 8000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.iltm.com/asia-pacific [1]",
    "tags": [
      "Luxury Travel",
      "Singapore",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "30",
    "name": "International Coffee & Tea Industry Expo (CAFÉ Asia)",
    "description": "International Coffee & Tea Industry Expo (CAFÉ Asia) is a premier Food & Beverage event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Jul 9, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 15000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cafeasia.sg [1]",
    "tags": [
      "Food & Beverage",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "31",
    "name": "Singapore International Jewelry Expo (SIJE)",
    "description": "Singapore International Jewelry Expo (SIJE) is a premier Jewelry & Accessories event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo.",
    category: EventCategory.JEWELRY,
    "date": "Jul 10, 2025",
    "location": "Sands Expo, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 18000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.sije.sg [4]",
    "tags": [
      "Jewelry & Accessories",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "32",
    "name": "Smart Leadership Asia",
    "description": "Smart Leadership Asia is a premier Training & Development event held in Singapore, Singapore. Join industry leaders and innovators at TBA.",
    category: EventCategory.EDUCATION,
    "date": "Jul 27, 2025",
    "location": "TBA, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.smartleadershipasia.com [4]",
    "tags": [
      "Training & Development",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "33",
    "name": "SG Pet Festival Expo",
    "description": "SG Pet Festival Expo is a premier Animals & Pets event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.ANIMALS_PETS,
    "date": "Aug 1, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 12000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://sgpetfestival.com [4]",
    "tags": [
      "Animals & Pets",
      "Singapore",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "34",
    "name": "Asia-Pacific Imaging Summit",
    "description": "Asia-Pacific Imaging Summit is a premier Medical & Science event held in Singapore, Singapore. Join industry leaders and innovators at NTU Novena Campus.",
    category: EventCategory.MEDICAL_PHARMA,
    "date": "Aug 5, 2025",
    "location": "NTU Novena Campus, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 2000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.apis-asia.com [4]",
    "tags": [
      "Medical & Science",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "35",
    "name": "COMEX",
    "description": "COMEX is a premier Consumer Electronics event held in Singapore, Singapore. Join industry leaders and innovators at Suntec Convention Centre.",
    category: EventCategory.CONSUMER_ELECTRONICS,
    "date": "Aug 28, 2025",
    "location": "Suntec Convention Centre, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 50000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.comex.com.sg [4]",
    "tags": [
      "Consumer Electronics",
      "Singapore",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "36",
    "name": "APAC Food & Beverage Expo",
    "description": "APAC Food & Beverage Expo is a premier Food & Beverage event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Aug 15, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 18000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.apacfnbexpo.com [4]",
    "tags": [
      "Food & Beverage",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "37",
    "name": "The Business Show Asia",
    "description": "The Business Show Asia is a premier Business Services event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo.",
    category: EventCategory.BUSINESS_SERVICES,
    "date": "Aug 27, 2025",
    "location": "Sands Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 7000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.thebusinessshow.asia [4]",
    "tags": [
      "Business Services",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "38",
    "name": "Indonesia Mining Expo",
    "description": "Indonesia Mining Expo is a premier Mining & Minerals event held in Jakarta, Indonesia. Join industry leaders and innovators at ICE BSD.",
    category: EventCategory.MINING_MINERALS,
    "date": "Jul 1, 2025",
    "location": "ICE BSD, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 20000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.indonesiaminingexpo.com [2]",
    "tags": [
      "Mining & Minerals",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1614107151491-6876eecbff89?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "39",
    "name": "Food & Hotel Indonesia",
    "description": "Food & Hotel Indonesia is a premier Food & Beverage event held in Jakarta, Indonesia. Join industry leaders and innovators at JIExpo.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Mar 5, 2025",
    "location": "JIExpo, Jakarta",
    "priceRange": "IDR 150,000",
    "basePrice": 150000,
    "currency": "IDR",
    "predictedTurnout": 18000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.fhi.co.id [2]",
    "tags": [
      "Food & Beverage",
      "Indonesia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "40",
    "name": "TechXpo Indonesia",
    "description": "TechXpo Indonesia is a premier Technology event held in Jakarta, Indonesia. Join industry leaders and innovators at JIExpo.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Sep 10, 2025",
    "location": "JIExpo, Jakarta",
    "priceRange": "IDR 150,000",
    "basePrice": 150000,
    "currency": "IDR",
    "predictedTurnout": 18000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.techxpoindonesia.com",
    "tags": [
      "Technology",
      "Indonesia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "41",
    "name": "Indonesia International Furniture Expo",
    "description": "Indonesia International Furniture Expo is a premier Furniture event held in Surabaya, Indonesia. Join industry leaders and innovators at Grand City Convex.",
    category: EventCategory.FURNITURE_HOME,
    "date": "Oct 5, 2025",
    "location": "Grand City Convex, Surabaya",
    "priceRange": "IDR 150,000",
    "basePrice": 150000,
    "currency": "IDR",
    "predictedTurnout": 10000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.ifex-indonesia.com",
    "tags": [
      "Furniture",
      "Indonesia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "42",
    "name": "Indonesia International Fruit & Vegetable Expo",
    "description": "Indonesia International Fruit & Vegetable Expo is a premier Agriculture event held in Jakarta, Indonesia. Join industry leaders and innovators at JCX.",
    category: EventCategory.AGRICULTURE,
    "date": "Aug 18, 2025",
    "location": "JCX, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 9000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.fruitvegexpo.com",
    "tags": [
      "Agriculture",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "43",
    "name": "Food & Drinks Malaysia",
    "description": "Food & Drinks Malaysia is a premier Food & Beverage event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Jul 15, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 12000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.fooddrinksmalaysia.com [5]",
    "tags": [
      "Food & Beverage",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "44",
    "name": "Franchise & Business Opportunities Expo",
    "description": "Franchise & Business Opportunities Expo is a premier Franchising event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at KLCC.",
    category: EventCategory.FRANCHISING,
    "date": "Mar 12, 2025",
    "location": "KLCC, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 15000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.franmalaysia.com [5]",
    "tags": [
      "Franchising",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1559136555-930d72f1d300?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "45",
    "name": "MIHAS Halal Expo",
    "description": "MIHAS Halal Expo is a premier Halal Products event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.HALAL,
    "date": "Apr 8, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 10000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.mihas.com.my [5]",
    "tags": [
      "Halal Products",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "46",
    "name": "Malaysia International Furniture Fair",
    "description": "Malaysia International Furniture Fair is a premier Furniture event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.FURNITURE_HOME,
    "date": "May 20, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 8000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.miff.com.my",
    "tags": [
      "Furniture",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "47",
    "name": "Malaysia International Food & Beverage Trade Show",
    "description": "Malaysia International Food & Beverage Trade Show is a premier Food & Beverage event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Sep 10, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 11000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.malaysiabfd.com",
    "tags": [
      "Food & Beverage",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "48",
    "name": "Starch Expo Malaysia",
    "description": "Starch Expo Malaysia is a premier Industry & Manufacturing event held in Penang, Malaysia. Join industry leaders and innovators at SPICE Arena.",
    category: EventCategory.MANUFACTURING,
    "date": "Nov 5, 2025",
    "location": "SPICE Arena, Penang",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.starchexpo.com",
    "tags": [
      "Industry & Manufacturing",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "49",
    "name": "Manufacturing Asia Malaysia",
    "description": "Manufacturing Asia Malaysia is a premier Manufacturing event held in Penang, Malaysia. Join industry leaders and innovators at SPICE Arena.",
    category: EventCategory.MANUFACTURING,
    "date": "Jul 24, 2025",
    "location": "SPICE Arena, Penang",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 7000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.manufacturingasia.com",
    "tags": [
      "Manufacturing",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "50",
    "name": "Myanmar International Textile & Garment Industry Exhibition",
    "description": "Myanmar International Textile & Garment Industry Exhibition is a premier Textiles event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Conv. Ctr.",
    category: EventCategory.FASHION,
    "date": "Mar 18, 2025",
    "location": "Yangon Conv. Ctr, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 6000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.mygtex.com",
    "tags": [
      "Textiles",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "51",
    "name": "Myanmar Agri Expo",
    "description": "Myanmar Agri Expo is a premier Agriculture event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Conv. Ctr.",
    category: EventCategory.AGRICULTURE,
    "date": "Aug 21, 2025",
    "location": "Yangon Conv. Ctr, Yangon",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 6000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.myanmaragriexpo.com",
    "tags": [
      "Agriculture",
      "Myanmar",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "52",
    "name": "Myanmar Construction & Infrastructure Expo",
    "description": "Myanmar Construction & Infrastructure Expo is a premier Construction event held in Nay Pyi Taw, Myanmar. Join industry leaders and innovators at Myanmar Intl. Ctr.",
    category: EventCategory.CONSTRUCTION,
    "date": "Jun 10, 2025",
    "location": "Myanmar Intl. Ctr, Nay Pyi Taw",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.mci-expo.com",
    "tags": [
      "Construction",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "53",
    "name": "Myanmar Energy Expo",
    "description": "Myanmar Energy Expo is a premier Energy event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Conv. Ctr.",
    category: EventCategory.ENERGY,
    "date": "May 28, 2025",
    "location": "Yangon Conv. Ctr, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 7000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.myanmarenergyexpo.com",
    "tags": [
      "Energy",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "54",
    "name": "Myanmar Healthcare Expo",
    "description": "Myanmar Healthcare Expo is a premier Medical & Pharma event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Conv. Ctr.",
    category: EventCategory.MEDICAL_PHARMA,
    "date": "Sep 15, 2025",
    "location": "Yangon Conv. Ctr, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 4000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.myanmarhealthcareexpo.com",
    "tags": [
      "Medical & Pharma",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "55",
    "name": "Vietnam Foodexpo",
    "description": "Vietnam Foodexpo is a premier Food & Beverage event held in Hanoi, Vietnam. Join industry leaders and innovators at I.C.E.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Oct 10, 2025",
    "location": "I.C.E, Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 12000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.vietnamfoodexpo.com [9]",
    "tags": [
      "Food & Beverage",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "56",
    "name": "Vietbuild Construction Vietnam",
    "description": "Vietbuild Construction Vietnam is a premier  Construction event held in  Ho Chi Minh City, Vietnam. Join industry leaders and innovators at  SECC.",
    category: EventCategory.CONSTRUCTION,
    "date": "TBA",
    "location": " SECC,  Ho Chi Minh City",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 25000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": " https://www.vietbuildexpo.com [9]",
    "tags": [
      " Construction",
      "Vietnam",
      " B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "57",
    "name": "Vietnam International Furniture Fair",
    "description": "Vietnam International Furniture Fair is a premier  Furniture event held in  Ho Chi Minh City, Vietnam. Join industry leaders and innovators at  SECC.",
    category: EventCategory.FURNITURE_HOME,
    "date": "TBA",
    "location": " SECC,  Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 9000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": " https://www.viff.vn",
    "tags": [
      " Furniture",
      "Vietnam",
      " B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "58",
    "name": "Vietnam ICT COMM",
    "description": "Vietnam ICT COMM is a premier  ICT/Telecom event held in  Ho Chi Minh City, Vietnam. Join industry leaders and innovators at  SECC.",
    category: EventCategory.ICT_TELECOM,
    "date": "TBA",
    "location": " SECC,  Ho Chi Minh City",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 15000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": " https://ictcomm.vn [8]",
    "tags": [
      " ICT/Telecom",
      "Vietnam",
      " B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "59",
    "name": "Vietnam International Beer Festival",
    "description": "Vietnam International Beer Festival is a premier  Food & Beverage event held in  Ho Chi Minh City, Vietnam. Join industry leaders and innovators at  SECC.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "TBA",
    "location": " SECC,  Ho Chi Minh City",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 18000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": " https://www.vibf.com",
    "tags": [
      " Food & Beverage",
      "Vietnam",
      " B2C"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "60",
    "name": "Vietnam Fashion & Garment Fair",
    "description": "Vietnam Fashion & Garment Fair is a premier  Textiles & Apparel event held in  Hanoi, Vietnam. Join industry leaders and innovators at  I.C.E.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": " I.C.E,  Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 8000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": " https://www.vfgf.vn",
    "tags": [
      " Textiles & Apparel",
      "Vietnam",
      " B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "61",
    "name": "Laos Build Expo",
    "description": "Laos Build Expo is a premier  Construction event held in  Vientiane, Laos. Join industry leaders and innovators at  National Convention Centre.",
    category: EventCategory.CONSTRUCTION,
    "date": "TBA",
    "location": " National Convention Centre,  Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 4000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": " https://www.laosbuild.com [10]",
    "tags": [
      " Construction",
      "Laos",
      " B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "62",
    "name": "Laos Trade & Investment Expo",
    "description": "Laos Trade & Investment Expo is a premier  Trade & Investment event held in  Vientiane, Laos. Join industry leaders and innovators at  Convention Centre.",
    category: EventCategory.GENERAL_TRADE,
    "date": "TBA",
    "location": " Convention Centre,  Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 3000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": " https://www.laostradeinvestment.com",
    "tags": [
      " Trade & Investment",
      "Laos",
      " B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "63",
    "name": "Laos Agro & Food Expo",
    "description": "Laos Agro & Food Expo is a premier  Agriculture & Food event held in  Vientiane, Laos. Join industry leaders and innovators at  Expo Area.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "TBA",
    "location": " Expo Area,  Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 2500,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": " https://www.laosagroexpo.com",
    "tags": [
      " Agriculture & Food",
      "Laos",
      " B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "64",
    "name": "Laos ICT Expo",
    "description": "Laos ICT Expo is a premier  ICT/Telecom event held in  Vientiane, Laos. Join industry leaders and innovators at  National Convention Centre.",
    category: EventCategory.ICT_TELECOM,
    "date": "TBA",
    "location": " National Convention Centre,  Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 2000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": " https://www.laosictexpo.com",
    "tags": [
      " ICT/Telecom",
      "Laos",
      " B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "65",
    "name": "Cambodia International Machinery Fair",
    "description": "Cambodia International Machinery Fair is a premier  Industrial Machinery event held in  Phnom Penh, Cambodia. Join industry leaders and innovators at  Diamond Island Exhibition Ctr.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "TBA",
    "location": " Diamond Island Exhibition Ctr,  Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 3500,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": " https://www.cambodiamachineryfair.com",
    "tags": [
      " Industrial Machinery",
      "Cambodia",
      " B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "66",
    "name": "Cambodia Real Estate Show",
    "description": "Cambodia Real Estate Show is a premier  Property & Real Estate event held in  Phnom Penh, Cambodia. Join industry leaders and innovators at  CJ Friendship Hall.",
    category: EventCategory.REAL_ESTATE,
    "date": "TBA",
    "location": " CJ Friendship Hall,  Phnom Penh",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": " https://www.camrealestateshow.com",
    "tags": [
      " Property & Real Estate",
      "Cambodia",
      " B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "67",
    "name": "Cambodia Hotel & Restaurant Show",
    "description": "Cambodia Hotel & Restaurant Show is a premier  Hospitality & Tourism event held in  Phnom Penh, Cambodia. Join industry leaders and innovators at  Diamond Island Exhibition Ctr.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "TBA",
    "location": " Diamond Island Exhibition Ctr,  Phnom Penh",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 4500,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": " https://www.cambodiahotelshow.com",
    "tags": [
      " Hospitality & Tourism",
      "Cambodia",
      " B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "68",
    "name": "Cambodia ICT & Digital Innovation Expo",
    "description": "Cambodia ICT & Digital Innovation Expo is a premier  ICT/Tech event held in  Phnom Penh, Cambodia. Join industry leaders and innovators at  Diamond Island Exhibition Ctr.",
    category: EventCategory.ICT_TELECOM,
    "date": "TBA",
    "location": " Diamond Island Exhibition Ctr,  Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 3000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": " https://www.cambodiaictexpo.com",
    "tags": [
      " ICT/Tech",
      "Cambodia",
      " B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "69",
    "name": "Cambodia Agriculture & Food Festival",
    "description": "Cambodia Agriculture & Food Festival is a premier  Agriculture & Food event held in  Phnom Penh, Cambodia. Join industry leaders and innovators at  Diamond Island Exhibition Ctr.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "TBA",
    "location": " Diamond Island Exhibition Ctr,  Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 4000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": " https://www.cambodiaagrofoodfest.com",
    "tags": [
      " Agriculture & Food",
      "Cambodia",
      " B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "70",
    "name": "Lao–Viet Trade Fair 2025",
    "description": "Lao–Viet Trade Fair 2025 is a premier rest of the countries event held in Vientiane, Laos. Join industry leaders and innovators at Lao-ITECC Centre.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Lao-ITECC Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://kpl.gov.la/En/detail.aspx?id=89937",
    "tags": [
      "rest of the countries",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "71",
    "name": "Laos Build Expo 2025",
    "description": "Laos Build Expo 2025 is a premier rest of the countries event held in Vientiane, Laos. Join industry leaders and innovators at National Convention Centre.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "National Convention Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.laosbuild.com",
    "tags": [
      "rest of the countries",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "72",
    "name": "Laos Agro & Food Expo 2025",
    "description": "Laos Agro & Food Expo 2025 is a premier rest of the countries event held in Vientiane, Laos. Join industry leaders and innovators at Expo Area.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Expo Area, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.laosagroexpo.com",
    "tags": [
      "rest of the countries",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "73",
    "name": "Laos ICT Expo 2025",
    "description": "Laos ICT Expo 2025 is a premier rest of the countries event held in Vientiane, Laos. Join industry leaders and innovators at National Convention Centre.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "National Convention Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.laosictexpo.com",
    "tags": [
      "rest of the countries",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "74",
    "name": "CAMBUILD 2025",
    "description": "CAMBUILD 2025 is a premier rest of the countries event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cambodia-plasprintpack.com",
    "tags": [
      "rest of the countries",
      "Cambodia",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "75",
    "name": "Cambodia Int’l Machinery Fair 2025",
    "description": "Cambodia Int’l Machinery Fair 2025 is a premier rest of the countries event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cambodiamachineryfair.com",
    "tags": [
      "rest of the countries",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "76",
    "name": "Cambodia Real Estate Show 2025",
    "description": "Cambodia Real Estate Show 2025 is a premier rest of the countries event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Cambodia-Japan Friendship Hall.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Cambodia-Japan Friendship Hall, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.camrealestateshow.com",
    "tags": [
      "rest of the countries",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "77",
    "name": "Cambodia Hotel & Restaurant Show 2025",
    "description": "Cambodia Hotel & Restaurant Show 2025 is a premier rest of the countries event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cambodiahotelshow.com",
    "tags": [
      "rest of the countries",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "78",
    "name": "Cambodia ICT & Digital Innovation Expo 2025",
    "description": "Cambodia ICT & Digital Innovation Expo 2025 is a premier rest of the countries event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cambodiaictexpo.com",
    "tags": [
      "rest of the countries",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "79",
    "name": "Cambodia Agriculture & Food Festival 2025",
    "description": "Cambodia Agriculture & Food Festival 2025 is a premier rest of the countries event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cambodiaagrofoodfest.com",
    "tags": [
      "rest of the countries",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "80",
    "name": "COSMOBEAUTÉ PHILIPPINES 2025",
    "description": "COSMOBEAUTÉ PHILIPPINES 2025 is a premier rest of the countries event held in Manila, Philippines. Join industry leaders and innovators at World Trade Centre Metro Manila.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "World Trade Centre Metro Manila, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://cosmobeautephilippines.com",
    "tags": [
      "rest of the countries",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "81",
    "name": "MAFBEX – Manila F&B Expo 2025",
    "description": "MAFBEX – Manila F&B Expo 2025 is a premier rest of the countries event held in Manila, Philippines. Join industry leaders and innovators at World Trade Centre Metro Manila.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "World Trade Centre Metro Manila, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://mafbe.com",
    "tags": [
      "rest of the countries",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "82",
    "name": "Philmarine & Offshore Wind Expo 2025",
    "description": "Philmarine & Offshore Wind Expo 2025 is a premier rest of the countries event held in Manila, Philippines. Join industry leaders and innovators at SMX Convention Center.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "SMX Convention Center, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://philmarine.com",
    "tags": [
      "rest of the countries",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "83",
    "name": "PhilConstruct Visayas 2025",
    "description": "PhilConstruct Visayas 2025 is a premier rest of the countries event held in Cebu, Philippines. Join industry leaders and innovators at Waterfront Cebu City Convention Center.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Waterfront Cebu City Convention Center, Cebu",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://philconstructvisayas.com",
    "tags": [
      "rest of the countries",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "84",
    "name": "Aquaculture Philippines 2025",
    "description": "Aquaculture Philippines 2025 is a premier rest of the countries event held in Manila, Philippines. Join industry leaders and innovators at World Trade Centre Metro Manila.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "World Trade Centre Metro Manila, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://aquaculturephilippines.com",
    "tags": [
      "rest of the countries",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "85",
    "name": "Digital Banking Asia 2025 – Philippines",
    "description": "Digital Banking Asia 2025 – Philippines is a premier rest of the countries event held in Manila, Philippines. Join industry leaders and innovators at Philippine International Convention Ctr.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Philippine International Convention Ctr, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://digitalbankingasia.com",
    "tags": [
      "rest of the countries",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "86",
    "name": "IFEX Philippines 2025",
    "description": "IFEX Philippines 2025 is a premier rest of the countries event held in Manila, Philippines. Join industry leaders and innovators at SMX Convention Center.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "SMX Convention Center, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://ifexphilippines.com",
    "tags": [
      "rest of the countries",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "87",
    "name": "PhilSME Business Expo 2025",
    "description": "PhilSME Business Expo 2025 is a premier rest of the countries event held in Manila, Philippines. Join industry leaders and innovators at TBD.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "TBD, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://philsmeexpo.com",
    "tags": [
      "rest of the countries",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "88",
    "name": "WorldBEX 2025",
    "description": "WorldBEX 2025 is a premier rest of the countries event held in Manila, Philippines. Join industry leaders and innovators at World Trade Centre Metro Manila.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "World Trade Centre Metro Manila, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://worldbex.com",
    "tags": [
      "rest of the countries",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "89",
    "name": "MTG – Myanmar Int’l Textile & Garment Expo 2025",
    "description": "MTG – Myanmar Int’l Textile & Garment Expo 2025 is a premier rest of the countries event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://mygtex.com",
    "tags": [
      "rest of the countries",
      "Myanmar",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "90",
    "name": "Myanmar Agri Expo 2025",
    "description": "Myanmar Agri Expo 2025 is a premier rest of the countries event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://myanmaragriexpo.com",
    "tags": [
      "rest of the countries",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "91",
    "name": "Myanmar Construction & Infrastructure Expo 2025",
    "description": "Myanmar Construction & Infrastructure Expo 2025 is a premier rest of the countries event held in Nay Pyi Taw, Myanmar. Join industry leaders and innovators at Myanmar Intl Convention Centre.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Myanmar Intl Convention Centre, Nay Pyi Taw",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://mci-expo.com",
    "tags": [
      "rest of the countries",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "92",
    "name": "Myanmar Energy Expo 2025",
    "description": "Myanmar Energy Expo 2025 is a premier rest of the countries event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://myanmarenergyexpo.com",
    "tags": [
      "rest of the countries",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "93",
    "name": "Myanmar Healthcare Expo 2025",
    "description": "Myanmar Healthcare Expo 2025 is a premier rest of the countries event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://myanmarhealthcareexpo.com",
    "tags": [
      "rest of the countries",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "94",
    "name": "AI Festival Asia (AIFA)",
    "description": "AI Festival Asia (AIFA) is a premier AI event held in Singapore, Singapore. Join industry leaders and innovators at Suntec Convention Centre, Hall 301–302.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "Suntec Convention Centre, Hall 301–302, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "AI",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "95",
    "name": "—",
    "description": "— is a premier AI event held in Singapore, http://lli.sg/events/ai-festival-asia. Join industry leaders and innovators at TBA.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "AI",
      "http://lli.sg/events/ai-festival-asia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "96",
    "name": "SuperAI Conference",
    "description": "SuperAI Conference is a premier AI event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "AI",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "97",
    "name": "100+",
    "description": "100+ is a premier AI event held in Singapore, https://pullupstand.com/blogs/blog/superai-conference-2025-singapore-ai-summit. Join industry leaders and innovators at TBA.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "AI",
      "https://pullupstand.com/blogs/blog/superai-conference-2025-singapore-ai-summit",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "98",
    "name": "Big Data & AI World Asia",
    "description": "Big Data & AI World Asia is a premier AI event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo & Convention Centre.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "AI",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "99",
    "name": "500+",
    "description": "500+ is a premier AI event held in Singapore, https://www.eventbrite.sg/e/big-data-ai-world-asia-2025-tickets-1324823686309. Join industry leaders and innovators at TBA.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "AI",
      "https://www.eventbrite.sg/e/big-data-ai-world-asia-2025-tickets-1324823686309",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "100",
    "name": "AI Innovation Asia",
    "description": "AI Innovation Asia is a premier AI event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo & Convention Centre.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "AI",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "101",
    "name": "—",
    "description": "— is a premier AI event held in Singapore, https://events.economist.com/ai-innovation-asia/. Join industry leaders and innovators at TBA.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "AI",
      "https://events.economist.com/ai-innovation-asia/",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "102",
    "name": "World AI Show Jakarta",
    "description": "World AI Show Jakarta is a premier AI event held in Jakarta, Indonesia. Join industry leaders and innovators at JW Marriott Hotel.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "JW Marriott Hotel, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "AI",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "103",
    "name": "30+",
    "description": "30+ is a premier AI event held in Singapore, https://worldaishow.com/indonesia/. Join industry leaders and innovators at TBA.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "AI",
      "https://worldaishow.com/indonesia/",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "104",
    "name": "World AI Show Kuala Lumpur",
    "description": "World AI Show Kuala Lumpur is a premier AI event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at TBD.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "TBD, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "AI",
      "Malaysia",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "105",
    "name": "—",
    "description": "— is a premier AI event held in Singapore, https://worldaishow.com. Join industry leaders and innovators at TBA.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "AI",
      "https://worldaishow.com",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "106",
    "name": "ICON AI",
    "description": "ICON AI is a premier AI event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Universiti Teknologi Malaysia.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "Universiti Teknologi Malaysia, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://fai.utm.my/iconai2025/ ",
    "tags": [
      "AI",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "107",
    "name": "AI Congress",
    "description": "AI Congress is a premier AI event held in Manila, Philippines. Join industry leaders and innovators at SMX Convention Centre.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "SMX Convention Centre, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://globalaicouncil.ph/ai-congress-2025/ ",
    "tags": [
      "AI",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "108",
    "name": "AICON PH",
    "description": "AICON PH is a premier AI event held in Taguig (Metro Manila), Philippines. Join industry leaders and innovators at SM Aura Premier.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "SM Aura Premier, Taguig (Metro Manila)",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.aap.ph/event-details-registration/aicon-ph-2025 ",
    "tags": [
      "AI",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "109",
    "name": "AI Yangon Expo",
    "description": "AI Yangon Expo is a premier AI event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "Xinhua via The Star ",
    "tags": [
      "AI",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "110",
    "name": "AI Hackathon 2025",
    "description": "AI Hackathon 2025 is a premier AI event held in Bangkok, Thailand. Join industry leaders and innovators at KMUTT Suntec Campus.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "KMUTT Suntec Campus, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://sitevent.sit.kmutt.ac.th/aihack2025/ ",
    "tags": [
      "AI",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "111",
    "name": "AI Congress (ICON-AI)",
    "description": "AI Congress (ICON-AI) is a premier AI event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Universiti Teknologi Malaysia.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "Universiti Teknologi Malaysia, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://fai.utm.my/iconai2025/ ",
    "tags": [
      "AI",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "112",
    "name": "Super Vietnam 2025",
    "description": "Super Vietnam 2025 is a premier AI event held in Da Nang, Vietnam. Join industry leaders and innovators at Various venues.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "Various venues, Da Nang",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "VnEconomy ",
    "tags": [
      "AI",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "113",
    "name": "AI Festival Cambodia",
    "description": "AI Festival Cambodia is a premier AI event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "—",
    "tags": [
      "AI",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "114",
    "name": "AI Congo (Virtual/Hybrid)",
    "description": "AI Congo (Virtual/Hybrid) is a premier AI event held in Jakarta, Indonesia. Join industry leaders and innovators at Virtual + JIExpo Kemayoran.",
    category: EventCategory.AI_ML,
    "date": "TBA",
    "location": "Virtual + JIExpo Kemayoran, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "—",
    "tags": [
      "AI",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "115",
    "name": "transport logistic Southeast Asia & Air Cargo SEA 2025",
    "description": "transport logistic Southeast Asia & Air Cargo SEA 2025 is a premier logistics&shipping&ship manufac event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo & Convention Centre.",
    category: EventCategory.LOGISTICS_SHIPPING,
    "date": "TBA",
    "location": "Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 10,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://transportlogisticsea.com",
    "tags": [
      "logistics&shipping&ship manufac",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "116",
    "name": "CeMAT Southeast Asia & LogiSYM Asia Pacific 2025",
    "description": "CeMAT Southeast Asia & LogiSYM Asia Pacific 2025 is a premier logistics&shipping&ship manufac event held in Singapore, Singapore. Join industry leaders and innovators at Singapore EXPO.",
    category: EventCategory.LOGISTICS_SHIPPING,
    "date": "TBA",
    "location": "Singapore EXPO, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://cematseasia.com",
    "tags": [
      "logistics&shipping&ship manufac",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "117",
    "name": "Asia Pacific Maritime (APM) 2025",
    "description": "Asia Pacific Maritime (APM) 2025 is a premier logistics&shipping&ship manufac event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.LOGISTICS_SHIPPING,
    "date": "TBA",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 20,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.apmaritime.com",
    "tags": [
      "logistics&shipping&ship manufac",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "118",
    "name": "Sea Asia 2025",
    "description": "Sea Asia 2025 is a premier logistics&shipping&ship manufac event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.LOGISTICS_SHIPPING,
    "date": "TBA",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 20,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.sea-asia.com",
    "tags": [
      "logistics&shipping&ship manufac",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "119",
    "name": "Indonesia Maritime Week 2025",
    "description": "Indonesia Maritime Week 2025 is a premier logistics&shipping&ship manufac event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta Convention Centre.",
    category: EventCategory.LOGISTICS_SHIPPING,
    "date": "TBA",
    "location": "Jakarta Convention Centre, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 10,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://indonesiamaritimeweek.com",
    "tags": [
      "logistics&shipping&ship manufac",
      "Indonesia",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "120",
    "name": "Indonesia Maritime Expo (IME) 2025",
    "description": "Indonesia Maritime Expo (IME) 2025 is a premier logistics&shipping&ship manufac event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta International Expo.",
    category: EventCategory.LOGISTICS_SHIPPING,
    "date": "TBA",
    "location": "Jakarta International Expo, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://10times.com/indonesia-maritime-expo",
    "tags": [
      "logistics&shipping&ship manufac",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "121",
    "name": "INAMARINE 2025",
    "description": "INAMARINE 2025 is a premier logistics&shipping&ship manufac event held in Jakarta, Indonesia. Join industry leaders and innovators at JIExpo Kemayoran.",
    category: EventCategory.LOGISTICS_SHIPPING,
    "date": "TBA",
    "location": "JIExpo Kemayoran, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 25,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.inamarine-exhibition.net",
    "tags": [
      "logistics&shipping&ship manufac",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "122",
    "name": "Asia Pacific Maritime (APM) 2025 – Kobelt listing",
    "description": "Asia Pacific Maritime (APM) 2025 – Kobelt listing is a premier logistics&shipping&ship manufac event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.LOGISTICS_SHIPPING,
    "date": "TBA",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.kobelt.com",
    "tags": [
      "logistics&shipping&ship manufac",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "123",
    "name": "Cambodia Maritime & Port Technology Expo 2025¹",
    "description": "Cambodia Maritime & Port Technology Expo 2025¹ is a premier logistics&shipping&ship manufac event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.LOGISTICS_SHIPPING,
    "date": "TBA",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.camodiaportexpo.com",
    "tags": [
      "logistics&shipping&ship manufac",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "124",
    "name": "Philippine Logistics & Shipping Expo 2025²",
    "description": "Philippine Logistics & Shipping Expo 2025² is a premier logistics&shipping&ship manufac event held in Manila, Philippines. Join industry leaders and innovators at SMX Convention Centre.",
    category: EventCategory.LOGISTICS_SHIPPING,
    "date": "TBA",
    "location": "SMX Convention Centre, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://philshippingexpo.com",
    "tags": [
      "logistics&shipping&ship manufac",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "125",
    "name": "Myanmar Maritime & Logistics Fair 2025³",
    "description": "Myanmar Maritime & Logistics Fair 2025³ is a premier logistics&shipping&ship manufac event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.LOGISTICS_SHIPPING,
    "date": "TBA",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://myanmarlogisticsfair.com",
    "tags": [
      "logistics&shipping&ship manufac",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "126",
    "name": "Vietnam Shipping & Ports Expo 2025",
    "description": "Vietnam Shipping & Ports Expo 2025 is a premier logistics&shipping&ship manufac event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.LOGISTICS_SHIPPING,
    "date": "TBA",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://vietnamshippingexpo.com",
    "tags": [
      "logistics&shipping&ship manufac",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "127",
    "name": "Thailand Maritime & Logistics Expo 2025",
    "description": "Thailand Maritime & Logistics Expo 2025 is a premier logistics&shipping&ship manufac event held in Bangkok, Thailand. Join industry leaders and innovators at IMPACT Exhibition & Convention Centre.",
    category: EventCategory.LOGISTICS_SHIPPING,
    "date": "TBA",
    "location": "IMPACT Exhibition & Convention Centre, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://tgl-asia.com",
    "tags": [
      "logistics&shipping&ship manufac",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "128",
    "name": "Laos Port & Shipping Forum 2025",
    "description": "Laos Port & Shipping Forum 2025 is a premier logistics&shipping&ship manufac event held in Vientiane, Laos. Join industry leaders and innovators at Lao-ITECC Centre.",
    category: EventCategory.LOGISTICS_SHIPPING,
    "date": "TBA",
    "location": "Lao-ITECC Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://laosshippingforum.com",
    "tags": [
      "logistics&shipping&ship manufac",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "129",
    "name": "Solar & Storage Live Malaysia 2025",
    "description": "Solar & Storage Live Malaysia 2025 is a premier green energy event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.GREEN_ENERGY,
    "date": "Apr 9, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.terrapinn.com/solarstoragelive-my",
    "tags": [
      "green energy",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "130",
    "name": "Indo Renergy & Electric Expo & Forum 2025",
    "description": "Indo Renergy & Electric Expo & Forum 2025 is a premier green energy event held in Jakarta, Indonesia. Join industry leaders and innovators at JIExpo Kemayoran.",
    category: EventCategory.GREEN_ENERGY,
    "date": "Aug 13, 2025",
    "location": "JIExpo Kemayoran, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 16,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://indorenergy.com",
    "tags": [
      "green energy",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "131",
    "name": "Solar + Storage Expo Thailand 2025",
    "description": "Solar + Storage Expo Thailand 2025 is a premier green energy event held in Bangkok, Thailand. Join industry leaders and innovators at BITEC Bangna.",
    category: EventCategory.GREEN_ENERGY,
    "date": "Oct 22, 2025",
    "location": "BITEC Bangna, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://solarstorageexpo.com",
    "tags": [
      "green energy",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "132",
    "name": "RE Renewable Energy Vietnam 2025",
    "description": "RE Renewable Energy Vietnam 2025 is a premier green energy event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.GREEN_ENERGY,
    "date": "Nov 12, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.tradefairdates.com/RE-Renewable-Energy-Vietnam-M5981/Ho-Chi-Minh-City.html",
    "tags": [
      "green energy",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "133",
    "name": "PhilEnergy Expo 2025",
    "description": "PhilEnergy Expo 2025 is a premier green energy event held in Pasay, Philippines. Join industry leaders and innovators at SMX Convention Centre.",
    category: EventCategory.GREEN_ENERGY,
    "date": "Mar 19, 2025",
    "location": "SMX Convention Centre, Pasay",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://arabellejimenez.ph/2025/03/philenergy-2025-puts-spotlight-on.html",
    "tags": [
      "green energy",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "134",
    "name": "CAMSOLAR 2025",
    "description": "CAMSOLAR 2025 is a premier green energy event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Ctr.",
    category: EventCategory.GREEN_ENERGY,
    "date": "Oct 14, 2025",
    "location": "Diamond Island Ctr, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.eventseye.com/fairs/f-camsolar-25548-1.html",
    "tags": [
      "green energy",
      "Cambodia",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "135",
    "name": "Clean Energy Week Cambodia 2025",
    "description": "Clean Energy Week Cambodia 2025 is a premier green energy event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Multiple venues.",
    category: EventCategory.GREEN_ENERGY,
    "date": "TBA",
    "location": "Multiple venues, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://cleanenergycambodia.org/cleanenergyweek",
    "tags": [
      "green energy",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "136",
    "name": "SIEW – Singapore International Energy Week",
    "description": "SIEW – Singapore International Energy Week is a premier green energy event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo & Convention Centre.",
    category: EventCategory.GREEN_ENERGY,
    "date": "Oct 27, 2025",
    "location": "Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "http://www.siew.gov.sg",
    "tags": [
      "green energy",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "137",
    "name": "ACES – Asia Clean Energy Summit 2025",
    "description": "ACES – Asia Clean Energy Summit 2025 is a premier green energy event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo & Convention Centre.",
    category: EventCategory.GREEN_ENERGY,
    "date": "Oct 28, 2025",
    "location": "Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.asiacleanenergysummit.com",
    "tags": [
      "green energy",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "138",
    "name": "REM Asia – Renewable Energy Markets Asia 2025",
    "description": "REM Asia – Renewable Energy Markets Asia 2025 is a premier green energy event held in Singapore, Singapore. Join industry leaders and innovators at Sofitel Singapore City Centre.",
    category: EventCategory.GREEN_ENERGY,
    "date": "Apr 29, 2025",
    "location": "Sofitel Singapore City Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.renewableenergymarkets.com/asia",
    "tags": [
      "green energy",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "139",
    "name": "Laos Green Energy Expo 2025 (planned)",
    "description": "Laos Green Energy Expo 2025 (planned) is a premier green energy event held in Vientiane, Laos. Join industry leaders and innovators at National Convention Centre.",
    category: EventCategory.GREEN_ENERGY,
    "date": "TBA",
    "location": "National Convention Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "(no dedicated site found)",
    "tags": [
      "green energy",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "140",
    "name": "Myanmar Solar Energy Expo 2025",
    "description": "Myanmar Solar Energy Expo 2025 is a premier green energy event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.GREEN_ENERGY,
    "date": "Feb 13, 2025",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 16,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://pvknowhow.com/news/myanmar-solar-expo-global-innovations/",
    "tags": [
      "green energy",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "141",
    "name": "Singapore International Water Week Spotlight 2025",
    "description": "Singapore International Water Week Spotlight 2025 is a premier Flood Resilience & Urban Water Tech event held in Singapore, Singapore. Join industry leaders and innovators at Singapore EXPO.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Jun 23, 2025",
    "location": "Singapore EXPO, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.siww.com.sg ",
    "tags": [
      "Flood Resilience & Urban Water Tech",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "142",
    "name": "Malaysia Water Technology Expo (MYWATEREX 2025)",
    "description": "Malaysia Water Technology Expo (MYWATEREX 2025) is a premier Water Technology & Sustainability event held in Shah Alam, Malaysia. Join industry leaders and innovators at Setia City Convention Centre, Hall 2.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Aug 6, 2025",
    "location": "Setia City Convention Centre, Hall 2, Shah Alam",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.mapsglobe.com/malaysia-water-technology-expo-mywaterex-2025 ",
    "tags": [
      "Water Technology & Sustainability",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "143",
    "name": "INDO WATER 2025 Expo & Forum",
    "description": "INDO WATER 2025 Expo & Forum is a premier Water, Wastewater & Recycling Tech event held in Jakarta, Indonesia. Join industry leaders and innovators at JIExpo Kemayoran.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Aug 13, 2025",
    "location": "JIExpo Kemayoran, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.swa.org ",
    "tags": [
      "Water, Wastewater & Recycling Tech",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "144",
    "name": "Thai Water Expo 2025",
    "description": "Thai Water Expo 2025 is a premier Smart Water Management & Monitoring event held in Bangkok, Thailand. Join industry leaders and innovators at Queen Sirikit Nat’l Convention Centre (QSNCC).",
    category: EventCategory.WATER_TECH,
    "date": "Jul 2, 2025",
    "location": "Queen Sirikit Nat’l Convention Centre (QSNCC), Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.thai-water.com ",
    "tags": [
      "Smart Water Management & Monitoring",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "145",
    "name": "VIETWATER 2025",
    "description": "VIETWATER 2025 is a premier Water Supply & Wastewater Treatment event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at Saigon Exhibition & Convention Center (SECC).",
    category: EventCategory.WATER_TECH,
    "date": "Nov 5, 2025",
    "location": "Saigon Exhibition & Convention Center (SECC), Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.tradefairdates.com/VIETWATER-M5625/Ho-Chi-Minh-City.html ",
    "tags": [
      "Water Supply & Wastewater Treatment",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "146",
    "name": "LAOWATER 2025",
    "description": "LAOWATER 2025 is a premier Water & Wastewater Technology event held in Vientiane, Laos. Join industry leaders and innovators at National Convention Centre.",
    category: EventCategory.TECH_INNOVATION,
    "date": "TBA",
    "location": "National Convention Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.eventseye.com/fairs/f-laowater-22059-1.html ",
    "tags": [
      "Water & Wastewater Technology",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "147",
    "name": "CamWater 2025 (Phnom Penh Water Treatment Exhibition)",
    "description": "CamWater 2025 (Phnom Penh Water Treatment Exhibition) is a premier Water Treatment & Purification Tech event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Oct 14, 2025",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 14,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://en.jufair.com/exhibition/14740.html ",
    "tags": [
      "Water Treatment & Purification Tech",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "148",
    "name": "Water Philippines 2025",
    "description": "Water Philippines 2025 is a premier Water & Wastewater Management event held in Pasay City, Philippines. Join industry leaders and innovators at SMX Convention Center Manila (Ground Level).",
    category: EventCategory.WATER_TECH,
    "date": "Mar 19, 2025",
    "location": "SMX Convention Center Manila (Ground Level), Pasay City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 12,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://mb.com.ph/2025/3/21/water-philippines-2025-showcases-water-management-solutions ",
    "tags": [
      "Water & Wastewater Management",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "149",
    "name": "MYANWATER 2025 (Myanmar Int’l Water & Wastewater Technology Show)",
    "description": "MYANWATER 2025 (Myanmar Int’l Water & Wastewater Technology Show) is a premier Water Supply & Treatment Technology event held in Yangon, Myanmar. Join industry leaders and innovators at Myanmar Expo Hall.",
    category: EventCategory.TECH_INNOVATION,
    "date": "TBA",
    "location": "Myanmar Expo Hall, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "Water Supply & Treatment Technology",
      "Myanmar",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "150",
    "name": "Learning & Development Asia 2025",
    "description": "Learning & Development Asia 2025 is a premier Training & Development event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands – Sands Expo & Convention Centre.",
    category: EventCategory.EDUCATION,
    "date": "Sep 10, 2025",
    "location": "Marina Bay Sands – Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://conferences.humanresourcesonline.net/learning-and-development-sg/ ",
    "tags": [
      "Training & Development",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "151",
    "name": "Learning & Development Asia 2025 (Malaysia)",
    "description": "Learning & Development Asia 2025 (Malaysia) is a premier Training & Development event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at PARKROYAL Kuala Lumpur.",
    category: EventCategory.EDUCATION,
    "date": "Sep 24, 2025",
    "location": "PARKROYAL Kuala Lumpur, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://conferences.humanresourcesonline.net/learning-and-development-my/ ",
    "tags": [
      "Training & Development",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "152",
    "name": "Learning & Development World Congress 2025",
    "description": "Learning & Development World Congress 2025 is a premier Training & Development event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.EDUCATION,
    "date": "Jun 10, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.equip-global.com/index.php?_route_=learning-and-development-world-congress ",
    "tags": [
      "Training & Development",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "153",
    "name": "EDUtech Asia Free Expo",
    "description": "EDUtech Asia Free Expo is a premier Training & Development event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo & Convention Centre.",
    category: EventCategory.EDUCATION,
    "date": "Nov 5, 2025",
    "location": "Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.terrapinn.com/exhibition/edutech-asia/Free-Expo.stm ",
    "tags": [
      "Training & Development",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "154",
    "name": "Indonesia International Education & Training Expo 2025",
    "description": "Indonesia International Education & Training Expo 2025 is a premier Training & Development event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta Convention Center (JCC).",
    category: EventCategory.EDUCATION,
    "date": "TBA",
    "location": "Jakarta Convention Center (JCC), Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cantonfair.net/event/11770-indonesia-international-education-training-expo ",
    "tags": [
      "Training & Development",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "155",
    "name": "eLearning Forum Asia (eLFA2025)",
    "description": "eLearning Forum Asia (eLFA2025) is a premier Training & Development event held in Bangkok, Thailand. Join industry leaders and innovators at Knowledge Exchange for Innovation (KX).",
    category: EventCategory.EDUCATION,
    "date": "Aug 14, 2025",
    "location": "Knowledge Exchange for Innovation (KX), Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "http://www.elfasia.org/2025 ",
    "tags": [
      "Training & Development",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "156",
    "name": "EdTeX 2025",
    "description": "EdTeX 2025 is a premier Training & Development event held in Bangkok, Thailand. Join industry leaders and innovators at Queen Sirikit National Convention Centre.",
    category: EventCategory.EDUCATION,
    "date": "Nov 5, 2025",
    "location": "Queen Sirikit National Convention Centre, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.eventbrite.com/e/edtex-2025-tickets-1223153217199 ",
    "tags": [
      "Training & Development",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "157",
    "name": "Vietnam Career & Training Fair (VCTF) 2025",
    "description": "Vietnam Career & Training Fair (VCTF) 2025 is a premier Training & Development event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.EDUCATION,
    "date": "TBA",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://careerfair.asia/vietnam/ ",
    "tags": [
      "Training & Development",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "158",
    "name": "Laos ICT Expo & Training Forum 2025",
    "description": "Laos ICT Expo & Training Forum 2025 is a premier Training & Development event held in Vientiane, Laos. Join industry leaders and innovators at National Convention Centre.",
    category: EventCategory.EDUCATION,
    "date": "Nov 12, 2025",
    "location": "National Convention Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.laosictexpo.com ",
    "tags": [
      "Training & Development",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "159",
    "name": "Cambodia ICT & Digital Innovation Expo 2025",
    "description": "Cambodia ICT & Digital Innovation Expo 2025 is a premier Training & Development event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.EDUCATION,
    "date": "Sep 8, 2025",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cambodiaictexpo.com ",
    "tags": [
      "Training & Development",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "160",
    "name": "Philippine EmPOWERcon 2025",
    "description": "Philippine EmPOWERcon 2025 is a premier Training & Development event held in Manila, Philippines. Join industry leaders and innovators at TBD.",
    category: EventCategory.EDUCATION,
    "date": "May 28, 2025",
    "location": "TBD, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://app.xperto.ph/event/empowercon-2025 ",
    "tags": [
      "Training & Development",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "161",
    "name": "PSTD National Convention 2025",
    "description": "PSTD National Convention 2025 is a premier Training & Development event held in Cebu, Philippines. Join industry leaders and innovators at Bai Hotel Cebu.",
    category: EventCategory.EDUCATION,
    "date": "Aug 27, 2025",
    "location": "Bai Hotel Cebu, Cebu",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://events.glueup.com/org/pstd/ ",
    "tags": [
      "Training & Development",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "162",
    "name": "APT Training Course on Preparing for Int’l Conferences (TCPIC-2025)",
    "description": "APT Training Course on Preparing for Int’l Conferences (TCPIC-2025) is a premier Training & Development event held in Bangkok, Thailand. Join industry leaders and innovators at Bangkok.",
    category: EventCategory.EDUCATION,
    "date": "Mar 12, 2025",
    "location": "Bangkok, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "Training & Development",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "163",
    "name": "GTR Asia 2025",
    "description": "GTR Asia 2025 is a premier Trade Finance & Supply Chain event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands Convention Centre (Hibiscus 3).",
    category: EventCategory.FINTECH,
    "date": "Sep 2, 2025",
    "location": "Marina Bay Sands Convention Centre (Hibiscus 3), Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.gtreview.com/events/asia/gtr-asia-2025-singapore/ ",
    "tags": [
      "Trade Finance & Supply Chain",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "164",
    "name": "Trade Expo Indonesia (TEI) 2025",
    "description": "Trade Expo Indonesia (TEI) 2025 is a premier General Trade event held in BSD City, Indonesia. Join industry leaders and innovators at Indonesia Convention Exhibition (ICE BSD).",
    category: EventCategory.GENERAL_TRADE,
    "date": "Oct 15, 2025",
    "location": "Indonesia Convention Exhibition (ICE BSD), BSD City",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 41,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://en.antaranews.com/news/345725/indonesia-targets-165-bln-in-transactions-at-trade-expo ",
    "tags": [
      "General Trade",
      "Indonesia",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "165",
    "name": "Vietnam International Trade Fair (Vietnam Expo)",
    "description": "Vietnam International Trade Fair (Vietnam Expo) is a premier General Trade & Investment event held in Hanoi, Vietnam. Join industry leaders and innovators at Hanoi International Exhibition Center (I.C.E).",
    category: EventCategory.GENERAL_TRADE,
    "date": "Apr 2, 2025",
    "location": "Hanoi International Exhibition Center (I.C.E), Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 20,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://vietnamexpo.com.vn/en/overview/ ",
    "tags": [
      "General Trade & Investment",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "166",
    "name": "Cambodia Trade Expo (CTE) 2025",
    "description": "Cambodia Trade Expo (CTE) 2025 is a premier General Trade event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Phnom Penh Grand Hall, Chbar Ampov.",
    category: EventCategory.GENERAL_TRADE,
    "date": "Dec 13, 2024",
    "location": "Phnom Penh Grand Hall, Chbar Ampov, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.phnompenhpost.com/business/cambodia-trade-expo-highlights-growth-and-improved-investment-climate ",
    "tags": [
      "General Trade",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "167",
    "name": "Lao–Viet Trade Fair 2025",
    "description": "Lao–Viet Trade Fair 2025 is a premier Bilateral Trade event held in Vientiane, Laos. Join industry leaders and innovators at Lao-ITECC Centre.",
    category: EventCategory.B2B_TRADE,
    "date": "Jul 17, 2025",
    "location": "Lao-ITECC Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://kpl.gov.la/En/detail.aspx?id=89937 ",
    "tags": [
      "Bilateral Trade",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "168",
    "name": "Philippine Investment Conference (PIC) 2025",
    "description": "Philippine Investment Conference (PIC) 2025 is a premier Investment event held in Manila, Philippines. Join industry leaders and innovators at Grand Hyatt Manila, BGC.",
    category: EventCategory.GENERAL_TRADE,
    "date": "TBA",
    "location": "Grand Hyatt Manila, BGC, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cfasociety.org/philippines/society-events/pic2025 ",
    "tags": [
      "Investment",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "169",
    "name": "Yangon International Trade Expo 2025",
    "description": "Yangon International Trade Expo 2025 is a premier General Trade & Consumer Goods event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre (YCC).",
    category: EventCategory.GENERAL_TRADE,
    "date": "Nov 21, 2025",
    "location": "Yangon Convention Centre (YCC), Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.nexusfairs.com/yiexpo25/en ",
    "tags": [
      "General Trade & Consumer Goods",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "170",
    "name": "No major standalone Trade & Investment Expo found",
    "description": "No major standalone Trade & Investment Expo found is a premier — event held in —, Malaysia. Join industry leaders and innovators at —.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "—, —",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "Despite extensive search, no dedicated national Trade & Investment Expo was identified for Malaysia in 2025. ",
    "tags": [
      "—",
      "Malaysia",
      "—"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "171",
    "name": "ITMA ASIA + CITME 2025 ",
    "description": "ITMA ASIA + CITME 2025  is a premier textiles & apparel event held in Singapore, Singapore. Join industry leaders and innovators at TBA.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "textiles & apparel",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "172",
    "name": "Singapore",
    "description": "Singapore is a premier B2B event held in Singapore Expo, Singapore. Join industry leaders and innovators at 45958.",
    category: EventCategory.B2B_TRADE,
    "date": "Oct 31, 2025",
    "location": "45958, Singapore Expo",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 770,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "B2B",
      "Singapore",
      "30"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "173",
    "name": "Asia–Pacific Textile & Apparel Supply Chain Expo & Summit 2025 ",
    "description": "Asia–Pacific Textile & Apparel Supply Chain Expo & Summit 2025  is a premier textiles & apparel event held in Singapore, Singapore. Join industry leaders and innovators at TBA.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "textiles & apparel",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "174",
    "name": "Singapore",
    "description": "Singapore is a premier B2B event held in Sands Expo & Convention Centre, Singapore. Join industry leaders and innovators at 45980.",
    category: EventCategory.B2B_TRADE,
    "date": "Nov 21, 2025",
    "location": "45980, Sands Expo & Convention Centre",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 200,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "B2B",
      "Singapore",
      "5"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "175",
    "name": "ATEX Apparel & Textile Exhibition Malaysia 2025 ",
    "description": "ATEX Apparel & Textile Exhibition Malaysia 2025  is a premier textiles & apparel event held in Singapore, Singapore. Join industry leaders and innovators at TBA.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "textiles & apparel",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "176",
    "name": "Malaysia",
    "description": "Malaysia is a premier B2B event held in MITEC, Kuala Lumpur. Join industry leaders and innovators at 45883.",
    category: EventCategory.B2B_TRADE,
    "date": "Aug 16, 2025",
    "location": "45883, MITEC",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "B2B",
      "Kuala Lumpur",
      "N/A"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "177",
    "name": "Indo Intertex 2025 ",
    "description": "Indo Intertex 2025  is a premier textiles & apparel event held in Singapore, Singapore. Join industry leaders and innovators at TBA.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "textiles & apparel",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "178",
    "name": "Indonesia",
    "description": "Indonesia is a premier B2B event held in JIExpo Kemayoran, Jakarta. Join industry leaders and innovators at 45762.",
    category: EventCategory.B2B_TRADE,
    "date": "Apr 17, 2025",
    "location": "45762, JIExpo Kemayoran",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "B2B",
      "Jakarta",
      "N/A"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "179",
    "name": "SaigonTex & SaigonFabric 2025 ",
    "description": "SaigonTex & SaigonFabric 2025  is a premier textiles & apparel event held in Singapore, Singapore. Join industry leaders and innovators at TBA.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "textiles & apparel",
      "Singapore",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "180",
    "name": "Vietnam",
    "description": "Vietnam is a premier B2B event held in SECC, Ho Chi Minh City. Join industry leaders and innovators at 45756.",
    category: EventCategory.B2B_TRADE,
    "date": "Apr 12, 2025",
    "location": "45756, SECC",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 1,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "B2B",
      "Ho Chi Minh City",
      "30.452"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "181",
    "name": "INDO INTERTEX – Indonesia’s Largest Textile Show ",
    "description": "INDO INTERTEX – Indonesia’s Largest Textile Show  is a premier textiles & apparel event held in Singapore, Singapore. Join industry leaders and innovators at TBA.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "textiles & apparel",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "182",
    "name": "Indonesia",
    "description": "Indonesia is a premier B2B event held in Jakarta International Expo (JIExpo), Jakarta. Join industry leaders and innovators at 45762.",
    category: EventCategory.B2B_TRADE,
    "date": "Apr 17, 2025",
    "location": "45762, Jakarta International Expo (JIExpo)",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "B2B",
      "Jakarta",
      "N/A"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "183",
    "name": "SaigonTex 2025 – Vietnam Saigon Textile & Garment Expo ",
    "description": "SaigonTex 2025 – Vietnam Saigon Textile & Garment Expo  is a premier textiles & apparel event held in Singapore, Singapore. Join industry leaders and innovators at TBA.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "textiles & apparel",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "184",
    "name": "Vietnam",
    "description": "Vietnam is a premier B2B event held in SECC, Ho Chi Minh City. Join industry leaders and innovators at 45756.",
    category: EventCategory.B2B_TRADE,
    "date": "Apr 12, 2025",
    "location": "45756, SECC",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 1,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "B2B",
      "Ho Chi Minh City",
      "30.452"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "185",
    "name": "MTG Myanmar International Textile & Garment Industry Exhibition 2025 ",
    "description": "MTG Myanmar International Textile & Garment Industry Exhibition 2025  is a premier textiles & apparel event held in Singapore, Singapore. Join industry leaders and innovators at TBA.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "textiles & apparel",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "186",
    "name": "Myanmar",
    "description": "Myanmar is a premier B2B event held in Yangon Convention Centre, Yangon. Join industry leaders and innovators at 46007.",
    category: EventCategory.B2B_TRADE,
    "date": "Dec 19, 2025",
    "location": "46007, Yangon Convention Centre",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 135,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "B2B",
      "Yangon",
      "9.25"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "187",
    "name": "Myanmar Int’l Textile & Garment Expo – Chan Chao ",
    "description": "Myanmar Int’l Textile & Garment Expo – Chan Chao  is a premier textiles & apparel event held in Singapore, Singapore. Join industry leaders and innovators at TBA.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "textiles & apparel",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "188",
    "name": "Myanmar",
    "description": "Myanmar is a premier B2B event held in Yangon Convention Centre, Yangon. Join industry leaders and innovators at 46007.",
    category: EventCategory.B2B_TRADE,
    "date": "Dec 19, 2025",
    "location": "46007, Yangon Convention Centre",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "B2B",
      "Yangon",
      "N/A"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "189",
    "name": "Philippine National Textile Convention (TELACon) 2025 ",
    "description": "Philippine National Textile Convention (TELACon) 2025  is a premier textiles & apparel event held in Singapore, Singapore. Join industry leaders and innovators at TBA.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "textiles & apparel",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "190",
    "name": "Philippines",
    "description": "Philippines is a premier B2B event held in Philippine International Convention Ctr, Pasay City. Join industry leaders and innovators at 45687.",
    category: EventCategory.B2B_TRADE,
    "date": "Jan 31, 2025",
    "location": "45687, Philippine International Convention Ctr",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "B2B",
      "Pasay City",
      "N/A"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "191",
    "name": "Laos International Textile & Apparel Expo 2025 ",
    "description": "Laos International Textile & Apparel Expo 2025  is a premier textiles & apparel event held in Singapore, Singapore. Join industry leaders and innovators at TBA.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "textiles & apparel",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "192",
    "name": "Laos",
    "description": "Laos is a premier B2B event held in Lao-ITECC Centre, Vientiane. Join industry leaders and innovators at 45973.",
    category: EventCategory.B2B_TRADE,
    "date": "Nov 14, 2025",
    "location": "45973, Lao-ITECC Centre",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 100,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "B2B",
      "Vientiane",
      "2"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "193",
    "name": "Cambodia Int’l Apparel & Textile Accessories Expo 2025 ",
    "description": "Cambodia Int’l Apparel & Textile Accessories Expo 2025  is a premier textiles & apparel event held in Singapore, Singapore. Join industry leaders and innovators at TBA.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": "TBA, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "textiles & apparel",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "194",
    "name": "Cambodia",
    "description": "Cambodia is a premier B2B event held in Diamond Island Exhibition Center, Phnom Penh. Join industry leaders and innovators at 45882.",
    category: EventCategory.B2B_TRADE,
    "date": "Aug 16, 2025",
    "location": "45882, Diamond Island Exhibition Center",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 150,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "#",
    "tags": [
      "B2B",
      "Phnom Penh",
      "3"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "195",
    "name": "Asia Tech x Singapore (ATxSG) 2025",
    "description": "Asia Tech x Singapore (ATxSG) 2025 is a premier Technology & Innovation event held in Singapore, Singapore. Join industry leaders and innovators at Capella & Singapore Expo.",
    category: EventCategory.TECH_INNOVATION,
    "date": "TBA",
    "location": "Capella & Singapore Expo, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://asiatechxsg.com",
    "tags": [
      "Technology & Innovation",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "196",
    "name": "Techsauce Global Summit 2025",
    "description": "Techsauce Global Summit 2025 is a premier Technology & Innovation event held in Bangkok, Thailand. Join industry leaders and innovators at QSNCC Hall 3–4.",
    category: EventCategory.TECH_INNOVATION,
    "date": "TBA",
    "location": "QSNCC Hall 3–4, Bangkok",
    "priceRange": "฿50",
    "basePrice": 50,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://thebeat.asia",
    "tags": [
      "Technology & Innovation",
      "Thailand",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "197",
    "name": "TechXCon 2025",
    "description": "TechXCon 2025 is a premier Technology & Innovation event held in Jakarta, Indonesia. Join industry leaders and innovators at SMESCO Indonesia, Jakarta.",
    category: EventCategory.TECH_INNOVATION,
    "date": "TBA",
    "location": "SMESCO Indonesia, Jakarta, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://bit.ly/m/TechXcon2025",
    "tags": [
      "Technology & Innovation",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "198",
    "name": "Malaysia Technology Expo (MTE) 2025",
    "description": "Malaysia Technology Expo (MTE) 2025 is a premier Technology & Innovation event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at World Trade Centre KL.",
    category: EventCategory.TECH_INNOVATION,
    "date": "TBA",
    "location": "World Trade Centre KL, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://ifia.com/mte2025",
    "tags": [
      "Technology & Innovation",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "199",
    "name": "Indonesia Int’l Smart City Expo & Forum (IISMEX) 2025",
    "description": "Indonesia Int’l Smart City Expo & Forum (IISMEX) 2025 is a premier Technology & Innovation event held in Jakarta, Indonesia. Join industry leaders and innovators at JIExpo Kemayoran.",
    category: EventCategory.TECH_INNOVATION,
    "date": "TBA",
    "location": "JIExpo Kemayoran, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://iismex.com",
    "tags": [
      "Technology & Innovation",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "200",
    "name": "Vietnam ICT COMM 2025",
    "description": "Vietnam ICT COMM 2025 is a premier Technology & Innovation event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.TECH_INNOVATION,
    "date": "TBA",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://ictcomm.vn",
    "tags": [
      "Technology & Innovation",
      "Vietnam",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "201",
    "name": "Philippine Data Centre & Cloud Innovation Summit 2025",
    "description": "Philippine Data Centre & Cloud Innovation Summit 2025 is a premier Technology & Innovation event held in Manila, Philippines. Join industry leaders and innovators at Heritage Hotel Manila.",
    category: EventCategory.TECH_INNOVATION,
    "date": "TBA",
    "location": "Heritage Hotel Manila, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://tinyurl.com/phil-dccis2025",
    "tags": [
      "Technology & Innovation",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "202",
    "name": "Laos Digital Week 2025",
    "description": "Laos Digital Week 2025 is a premier Technology & Innovation event held in Vientiane, Laos. Join industry leaders and innovators at Lao-ITECC Centre.",
    category: EventCategory.TECH_INNOVATION,
    "date": "TBA",
    "location": "Lao-ITECC Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://wciw.org/lao-digital-week-2025",
    "tags": [
      "Technology & Innovation",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "203",
    "name": "Cambodia ICT & Digital Innovation Expo 2025",
    "description": "Cambodia ICT & Digital Innovation Expo 2025 is a premier Technology & Innovation event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.TECH_INNOVATION,
    "date": "TBA",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://cambodiaictexpo.com",
    "tags": [
      "Technology & Innovation",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "204",
    "name": "AI Yangon 2025",
    "description": "AI Yangon 2025 is a premier Technology & Innovation event held in Yangon, Myanmar. Join industry leaders and innovators at GMP Wholesale Mall.",
    category: EventCategory.TECH_INNOVATION,
    "date": "TBA",
    "location": "GMP Wholesale Mall, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://youtu.be/PW2EExGyXuw",
    "tags": [
      "Technology & Innovation",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "205",
    "name": "Global Property Expo Singapore 2025",
    "description": "Global Property Expo Singapore 2025 is a premier  Property & Real Estate event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo & Convention Centre.",
    category: EventCategory.REAL_ESTATE,
    "date": "Jul 18, 2025",
    "location": "Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.globalpropertyexpo.com ",
    "tags": [
      " Property & Real Estate",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "206",
    "name": "PropNex Singapore Property XPO 2025",
    "description": "PropNex Singapore Property XPO 2025 is a premier  Property & Real Estate event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands, Peony Ballroom.",
    category: EventCategory.REAL_ESTATE,
    "date": "May 17, 2025",
    "location": "Marina Bay Sands, Peony Ballroom, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.propnex.com/singapore-property-expo-show ",
    "tags": [
      " Property & Real Estate",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "207",
    "name": "Malaysia Property Expo (MAPEX) April 2025",
    "description": "Malaysia Property Expo (MAPEX) April 2025 is a premier  Property & Real Estate event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.REAL_ESTATE,
    "date": "TBA",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://mapex.com.my ",
    "tags": [
      " Property & Real Estate",
      "Malaysia",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "208",
    "name": "StarProperty Fair 2025",
    "description": "StarProperty Fair 2025 is a premier  Property & Real Estate event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Mid Valley Exhibition Centre.",
    category: EventCategory.REAL_ESTATE,
    "date": "Oct 10, 2025",
    "location": "Mid Valley Exhibition Centre, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.tradeindia.com/tradeshows/142563/ ",
    "tags": [
      " Property & Real Estate",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "209",
    "name": "Indonesia Property Expo 2025",
    "description": "Indonesia Property Expo 2025 is a premier  Property & Real Estate event held in Jakarta, Indonesia. Join industry leaders and innovators at Balai Sidang Jakarta Convention Center.",
    category: EventCategory.REAL_ESTATE,
    "date": "May 1, 2025",
    "location": "Balai Sidang Jakarta Convention Center, Jakarta",
    "priceRange": "IDR 150,000",
    "basePrice": 150000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "http://www.tradingchem.com/exhibitions/detail96063.html ",
    "tags": [
      " Property & Real Estate",
      "Indonesia",
      "B2B/B2C"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "210",
    "name": "DLF Great Indian Property Show",
    "description": "DLF Great Indian Property Show is a premier  Property & Real Estate event held in Jakarta, Indonesia. Join industry leaders and innovators at TBD Jakarta Venue.",
    category: EventCategory.REAL_ESTATE,
    "date": "Apr 25, 2025",
    "location": "TBD Jakarta Venue, Jakarta",
    "priceRange": "IDR 150,000",
    "basePrice": 150000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "http://www.zricks.com/Updates/DLF-Presents ",
    "tags": [
      " Property & Real Estate",
      "Indonesia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "211",
    "name": "The 47th House and Condo Expo",
    "description": "The 47th House and Condo Expo is a premier  Property & Real Estate event held in Bangkok, Thailand. Join industry leaders and innovators at Queen Sirikit National Convention Center.",
    category: EventCategory.REAL_ESTATE,
    "date": "Mar 20, 2025",
    "location": "Queen Sirikit National Convention Center, Bangkok",
    "priceRange": "฿50",
    "basePrice": 50,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.qsncc.com/en/whats-on/event-calendar ",
    "tags": [
      " Property & Real Estate",
      "Thailand",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "212",
    "name": "Thailand Smart City Expo 2025",
    "description": "Thailand Smart City Expo 2025 is a premier  Property & Real Estate event held in Bangkok, Thailand. Join industry leaders and innovators at QSNCC Hall 3-4.",
    category: EventCategory.REAL_ESTATE,
    "date": "Nov 5, 2025",
    "location": "QSNCC Hall 3-4, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.jetro.go.jp/en/database/j-messe ",
    "tags": [
      " Property & Real Estate",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "213",
    "name": "VIETBUILD 2025 International Construction Show",
    "description": "VIETBUILD 2025 International Construction Show is a premier  Property & Real Estate event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SKY EXPO Vietnam.",
    category: EventCategory.REAL_ESTATE,
    "date": "Jun 25, 2025",
    "location": "SKY EXPO Vietnam, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.jetro.go.jp/en/database/j-messe ",
    "tags": [
      " Property & Real Estate",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "214",
    "name": "Real Estate International Summit & Expo (RISE)",
    "description": "Real Estate International Summit & Expo (RISE) is a premier  Property & Real Estate event held in Manila, Philippines. Join industry leaders and innovators at Manila Hotel.",
    category: EventCategory.REAL_ESTATE,
    "date": "May 1, 2025",
    "location": "Manila Hotel, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.area.co.th/e/8619 ",
    "tags": [
      " Property & Real Estate",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "215",
    "name": "Philippine Property Expo 2025",
    "description": "Philippine Property Expo 2025 is a premier  Property & Real Estate event held in Manila, Philippines. Join industry leaders and innovators at SMX Convention Center Manila.",
    category: EventCategory.REAL_ESTATE,
    "date": "Sep 13, 2025",
    "location": "SMX Convention Center Manila, Manila",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://bizinp.com/article/top-global-property-expos-2025 ",
    "tags": [
      " Property & Real Estate",
      "Philippines",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "216",
    "name": "CAMBUILD 2025",
    "description": "CAMBUILD 2025 is a premier  Property & Real Estate event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.REAL_ESTATE,
    "date": "Oct 14, 2025",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cambuildexpo.com ",
    "tags": [
      " Property & Real Estate",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "217",
    "name": "Laos Real Estate Forum 2025",
    "description": "Laos Real Estate Forum 2025 is a premier  Property & Real Estate event held in Vientiane, Laos. Join industry leaders and innovators at Lao-ITECC Centre.",
    category: EventCategory.REAL_ESTATE,
    "date": "Aug 15, 2025",
    "location": "Lao-ITECC Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://expowindow.com/esite_1101_176/ ",
    "tags": [
      " Property & Real Estate",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "218",
    "name": "Myanmar Real Estate Investment Summit 2025",
    "description": "Myanmar Real Estate Investment Summit 2025 is a premier  Property & Real Estate event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.REAL_ESTATE,
    "date": "Sep 20, 2025",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.clocate.com/real-estate-show-myanmar ",
    "tags": [
      " Property & Real Estate",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "219",
    "name": "Mining Indonesia 2025",
    "description": "Mining Indonesia 2025 is a premier Mining & Minerals event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta International Expo, Kemayoran.",
    category: EventCategory.MINING_MINERALS,
    "date": "Sep 17, 2025",
    "location": "Jakarta International Expo, Kemayoran, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.mining-indonesia.com/about-the-show/ ",
    "tags": [
      "Mining & Minerals",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1614107151491-6876eecbff89?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "220",
    "name": "Indonesia Miner Conference & Exhibition 2025",
    "description": "Indonesia Miner Conference & Exhibition 2025 is a premier Mining & Minerals event held in Jakarta, Indonesia. Join industry leaders and innovators at The Westin Hotel Jakarta.",
    category: EventCategory.MINING_MINERALS,
    "date": "Jun 10, 2025",
    "location": "The Westin Hotel Jakarta, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 1,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.indonesiaminer.com/ ",
    "tags": [
      "Mining & Minerals",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1614107151491-6876eecbff89?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "221",
    "name": "CME Phnom Penh 2025",
    "description": "CME Phnom Penh 2025 is a premier Mining & Minerals event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Convention & Exhibition Ctr.",
    category: EventCategory.MINING_MINERALS,
    "date": "Oct 14, 2025",
    "location": "Diamond Island Convention & Exhibition Ctr, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.tradefairdates.com/CME-M1259/Phnom-Penh.html ",
    "tags": [
      "Mining & Minerals",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1614107151491-6876eecbff89?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "222",
    "name": "Asia Mining Congress 2025",
    "description": "Asia Mining Congress 2025 is a premier Mining & Minerals event held in Kuala Lumpur, Malaysia¹. Join industry leaders and innovators at Kuala Lumpur Convention Centre (KLCC).",
    category: EventCategory.MINING_MINERALS,
    "date": "Jul 8, 2025",
    "location": "Kuala Lumpur Convention Centre (KLCC), Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://asia-mining.com/2025-congress ",
    "tags": [
      "Mining & Minerals",
      "Malaysia¹",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1614107151491-6876eecbff89?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "223",
    "name": "Mining Summit Myanmar 2025",
    "description": "Mining Summit Myanmar 2025 is a premier Mining & Minerals event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.MINING_MINERALS,
    "date": "Aug 20, 2025",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://chamberofmines.com.ph/beta/ ",
    "tags": [
      "Mining & Minerals",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1614107151491-6876eecbff89?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "224",
    "name": "Vietnam Mining & Minerals Expo 2025",
    "description": "Vietnam Mining & Minerals Expo 2025 is a premier Mining & Minerals event held in Hanoi, Vietnam. Join industry leaders and innovators at International Centre for Exhibition (I.C.E).",
    category: EventCategory.MINING_MINERALS,
    "date": "May 14, 2025",
    "location": "International Centre for Exhibition (I.C.E), Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 10,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://vovworld.vn/ [ ]",
    "tags": [
      "Mining & Minerals",
      "Vietnam",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1614107151491-6876eecbff89?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "225",
    "name": "Philippine Mining Conference & Expo 2025",
    "description": "Philippine Mining Conference & Expo 2025 is a premier Mining & Minerals event held in Manila, Philippines. Join industry leaders and innovators at SMX Convention Center Manila.",
    category: EventCategory.MINING_MINERALS,
    "date": "Nov 22, 2025",
    "location": "SMX Convention Center Manila, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://internationalconferencealerts.com/philippines/mining ",
    "tags": [
      "Mining & Minerals",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1614107151491-6876eecbff89?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "226",
    "name": "Laos Mines & Minerals Forum 2025",
    "description": "Laos Mines & Minerals Forum 2025 is a premier Mining & Minerals event held in Vientiane, Laos. Join industry leaders and innovators at Lao-ITECC Centre.",
    category: EventCategory.MINING_MINERALS,
    "date": "Sep 3, 2025",
    "location": "Lao-ITECC Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.laosictexpo.com/ [ ]",
    "tags": [
      "Mining & Minerals",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1614107151491-6876eecbff89?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "227",
    "name": "Thailand Mineral & Mining Exhibition 2025",
    "description": "Thailand Mineral & Mining Exhibition 2025 is a premier Mining & Minerals event held in Bangkok, Thailand. Join industry leaders and innovators at IMPACT Exhibition & Convention Centre.",
    category: EventCategory.MINING_MINERALS,
    "date": "Nov 3, 2025",
    "location": "IMPACT Exhibition & Convention Centre, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://thaifex-anuga.com/ [ ]",
    "tags": [
      "Mining & Minerals",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1614107151491-6876eecbff89?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "228",
    "name": "Medical Fair Asia 2025",
    "description": "Medical Fair Asia 2025 is a premier Medical & Healthcare event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands – Sands Expo & Convention Ctr.",
    category: EventCategory.MEDICAL_PHARMA,
    "date": "Sep 10, 2025",
    "location": "Marina Bay Sands – Sands Expo & Convention Ctr, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.tradeindia.com/tradeshows/129889/medical-fair-asia-2025.html ",
    "tags": [
      "Medical & Healthcare",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "229",
    "name": "International Healthcare Week 2025",
    "description": "International Healthcare Week 2025 is a premier Medical, Pharma & Healthcare event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Malaysia International Trade & Exhibition Ctr (MITEC).",
    category: EventCategory.MEDICAL_PHARMA,
    "date": "Jul 16, 2025",
    "location": "Malaysia International Trade & Exhibition Ctr (MITEC), Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://laotiantimes.com/2025/06/02/international-healthcare-week-2025-innovate-collaborate-and-elevate-healthcare-in-asean-and-beyond/ ",
    "tags": [
      "Medical, Pharma & Healthcare",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "230",
    "name": "Indo Healthcare Expo 2025",
    "description": "Indo Healthcare Expo 2025 is a premier Medical & Healthcare event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta International Expo (JIExpo).",
    category: EventCategory.MEDICAL_PHARMA,
    "date": "Aug 6, 2025",
    "location": "Jakarta International Expo (JIExpo), Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://andamanmed.com/event/indo-healthcare-expo-2025/ ",
    "tags": [
      "Medical & Healthcare",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "231",
    "name": "Medical Fair Thailand 2025",
    "description": "Medical Fair Thailand 2025 is a premier Medical & Healthcare event held in Bangkok, Thailand. Join industry leaders and innovators at Bangkok International Trade & Exhibition Ctr (BITEC).",
    category: EventCategory.MEDICAL_PHARMA,
    "date": "Sep 10, 2025",
    "location": "Bangkok International Trade & Exhibition Ctr (BITEC), Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.medicalfair-thailand.com ",
    "tags": [
      "Medical & Healthcare",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "232",
    "name": "Vietnam Medi-Pharm 2025",
    "description": "Vietnam Medi-Pharm 2025 is a premier Medical & Pharmaceutical event held in Hanoi, Vietnam. Join industry leaders and innovators at Friendship Cultural Palace.",
    category: EventCategory.MEDICAL_PHARMA,
    "date": "May 8, 2025",
    "location": "Friendship Cultural Palace, Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.vietnammedipharm.vn/Default.aspx?language=en-US ",
    "tags": [
      "Medical & Pharmaceutical",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "233",
    "name": "PhilMedical Expo 2025",
    "description": "PhilMedical Expo 2025 is a premier Medical & Healthcare event held in Manila, Philippines. Join industry leaders and innovators at SMX Convention Center Manila.",
    category: EventCategory.MEDICAL_PHARMA,
    "date": "Aug 13, 2025",
    "location": "SMX Convention Center Manila, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.philmedical.com ",
    "tags": [
      "Medical & Healthcare",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "234",
    "name": "Phil Medtech Pasay 2025",
    "description": "Phil Medtech Pasay 2025 is a premier Medical Technology event held in Pasay (Metro Manila), Philippines. Join industry leaders and innovators at SMX Convention Center, Pasay.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Aug 13, 2025",
    "location": "SMX Convention Center, Pasay, Pasay (Metro Manila)",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.tradefairdates.com/Phil-Medtech-M11045/Pasay.html ",
    "tags": [
      "Medical Technology",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "235",
    "name": "MEDLAB Asia Pacific",
    "description": "MEDLAB Asia Pacific is a premier Laboratory technology, diagnostics, molecular diagnostics event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo & Convention Centre.",
    category: EventCategory.B2B_TRADE,
    "date": "Mar 11, 2025",
    "location": "Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.medlab-asia.com ",
    "tags": [
      "Laboratory technology, diagnostics, molecular diagnostics",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "236",
    "name": "26th Malaysian Science & Technology Congress (MSTC 2025)",
    "description": "26th Malaysian Science & Technology Congress (MSTC 2025) is a premier Life sciences, physical sciences, engineering integration event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MRANTI, Bukit Jalil.",
    category: EventCategory.B2B_TRADE,
    "date": "Jul 29, 2025",
    "location": "MRANTI, Bukit Jalil, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://submit.confbay.com/conf/mstc2025 ",
    "tags": [
      "Life sciences, physical sciences, engineering integration",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "237",
    "name": "Thailand Inventors’ Day 2025",
    "description": "Thailand Inventors’ Day 2025 is a premier Inventions & innovations across STEM event held in Bangkok, Thailand. Join industry leaders and innovators at BITEC (Hall 101-104).",
    category: EventCategory.B2B_TRADE,
    "date": "Feb 2, 2025",
    "location": "BITEC (Hall 101-104), Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.thailandexhibition.com ",
    "tags": [
      "Inventions & innovations across STEM",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "238",
    "name": "Vietnam Science & Engineering Fair (ViSEF)",
    "description": "Vietnam Science & Engineering Fair (ViSEF) is a premier Pre-university research projects in STEM event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.B2B_TRADE,
    "date": "Mar 19, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 212,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://tdtu.edu.vn/events/2025-03/vietnam-science-and-engineering-fair ",
    "tags": [
      "Pre-university research projects in STEM",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "239",
    "name": "Research Fair 2025",
    "description": "Research Fair 2025 is a premier Chemical engineering research, youth innovation event held in Manila, Philippines. Join industry leaders and innovators at University of the Philippines Diliman.",
    category: EventCategory.B2B_TRADE,
    "date": "Jan 16, 2025",
    "location": "University of the Philippines Diliman, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.researchfair.upalchemes.org ",
    "tags": [
      "Chemical engineering research, youth innovation",
      "Philippines",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "240",
    "name": "International Conference on Applied Research in Education",
    "description": "International Conference on Applied Research in Education is a premier Education, marine & earth sciences, AI & NLP event held in Nay Pyi Taw, Myanmar. Join industry leaders and innovators at Myanmar ICC II.",
    category: EventCategory.AI_ML,
    "date": "Jan 9, 2025",
    "location": "Myanmar ICC II, Nay Pyi Taw",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.gnlm.com.mm/2025-international-conference ",
    "tags": [
      "Education, marine & earth sciences, AI & NLP",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "241",
    "name": "International Conference on Science, Technology, Engineering & Management (ICSTEM-2025)",
    "description": "International Conference on Science, Technology, Engineering & Management (ICSTEM-2025) is a premier Cross-disciplinary STEM research event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Luxcity Hotel & Apartment.",
    category: EventCategory.B2B_TRADE,
    "date": "Mar 5, 2025",
    "location": "Luxcity Hotel & Apartment, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://b2b-cambodia.com/event/icstem-2025 ",
    "tags": [
      "Cross-disciplinary STEM research",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "242",
    "name": "analytica Vietnam 2025",
    "description": "analytica Vietnam 2025 is a premier Laboratory technology, biotech, analysis, diagnostics event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.B2B_TRADE,
    "date": "Apr 2, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 6,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://analyticavietnam.com ",
    "tags": [
      "Laboratory technology, biotech, analysis, diagnostics",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "243",
    "name": "LabAsia 2025",
    "description": "LabAsia 2025 is a premier Laboratory instruments, analytical & biotech equipment event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at KLCC.",
    category: EventCategory.B2B_TRADE,
    "date": "Jul 14, 2025",
    "location": "KLCC, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.lab-asia.com ",
    "tags": [
      "Laboratory instruments, analytical & biotech equipment",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "244",
    "name": "INALAB 2025",
    "description": "INALAB 2025 is a premier Lab equipment, analytical instruments event held in Jakarta, Indonesia. Join industry leaders and innovators at JIExpo, Kemayoran.",
    category: EventCategory.B2B_TRADE,
    "date": "Jul 29, 2025",
    "location": "JIExpo, Kemayoran, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 15,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://inalab-exhibition.net ",
    "tags": [
      "Lab equipment, analytical instruments",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "245",
    "name": "Philippine Tech Show 2025",
    "description": "Philippine Tech Show 2025 is a premier Cable, ISP, telecom technology event held in Manila, Philippines. Join industry leaders and innovators at SMX Convention Center Manila.",
    category: EventCategory.B2B_TRADE,
    "date": "Mar 24, 2025",
    "location": "SMX Convention Center Manila, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.philtechshow.net ",
    "tags": [
      "Cable, ISP, telecom technology",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "246",
    "name": "Laos ICT Expo 2025",
    "description": "Laos ICT Expo 2025 is a premier ICT, telecom, digital solutions event held in Vientiane, Laos. Join industry leaders and innovators at National Convention Centre.",
    category: EventCategory.ICT_TELECOM,
    "date": "Nov 12, 2025",
    "location": "National Convention Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.laosictexpo.com ",
    "tags": [
      "ICT, telecom, digital solutions",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "247",
    "name": "Cambodia Science Exhibition Festival 2025",
    "description": "Cambodia Science Exhibition Festival 2025 is a premier Science education, sustainable design event held in Phnom Penh, Cambodia. Join industry leaders and innovators at STEM Cambodia venues.",
    category: EventCategory.SCIENCE,
    "date": "Feb 8, 2025",
    "location": "STEM Cambodia venues, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://nepcambodia.org ",
    "tags": [
      "Science education, sustainable design",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "248",
    "name": "Research Fair – UP ALCHEMES",
    "description": "Research Fair – UP ALCHEMES is a premier Youth science research event held in Manila, Philippines. Join industry leaders and innovators at UP Diliman.",
    category: EventCategory.B2B_TRADE,
    "date": "Jan 16, 2025",
    "location": "UP Diliman, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://researchfair.upalchemes.org ",
    "tags": [
      "Youth science research",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "249",
    "name": "IAAPA Expo Asia 2025",
    "description": "IAAPA Expo Asia 2025 is a premier Entertainment event held in Shanghai (China), Regional¹. Join industry leaders and innovators at SNIEC.",
    category: EventCategory.ENTERTAINMENT,
    "date": "Jun 30, 2025",
    "location": "SNIEC, Shanghai (China)",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://iaapa.org/expos-and-events/expo-asia ",
    "tags": [
      "Entertainment",
      "Regional¹",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "250",
    "name": "gamescom asia x Thailand Game Show",
    "description": "gamescom asia x Thailand Game Show is a premier Entertainment event held in Bangkok, Thailand. Join industry leaders and innovators at Queen Sirikit Nat’l Convention Centre.",
    category: EventCategory.ENTERTAINMENT,
    "date": "Oct 16, 2025",
    "location": "Queen Sirikit Nat’l Convention Centre, Bangkok",
    "priceRange": "฿50",
    "basePrice": 50,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://gamescom.asia ",
    "tags": [
      "Entertainment",
      "Thailand",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "251",
    "name": "GameStart Asia 2025",
    "description": "GameStart Asia 2025 is a premier Entertainment event held in Singapore, Singapore. Join industry leaders and innovators at Suntec Singapore Convention & Expo Ctr.",
    category: EventCategory.ENTERTAINMENT,
    "date": "Oct 30, 2025",
    "location": "Suntec Singapore Convention & Expo Ctr, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://gamescom.asia/about/gamescom-asia/date-time ",
    "tags": [
      "Entertainment",
      "Singapore",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "252",
    "name": "AsiaPOP Comicon Manila 2025",
    "description": "AsiaPOP Comicon Manila 2025 is a premier Entertainment event held in Manila, Philippines. Join industry leaders and innovators at SMX Convention Center Manila.",
    category: EventCategory.ENTERTAINMENT,
    "date": "Aug 25, 2025",
    "location": "SMX Convention Center Manila, Manila",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "Event details unavailable online⁴",
    "tags": [
      "Entertainment",
      "Philippines",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "253",
    "name": "Singapore Comic Con 2025",
    "description": "Singapore Comic Con 2025 is a premier Entertainment event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands Expo & Convention Ctr.",
    category: EventCategory.ENTERTAINMENT,
    "date": "Dec 6, 2025",
    "location": "Marina Bay Sands Expo & Convention Ctr, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "Unofficial schedule⁵",
    "tags": [
      "Entertainment",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "254",
    "name": "Comic Fiesta 2025",
    "description": "Comic Fiesta 2025 is a premier Entertainment event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Kuala Lumpur Convention Centre.",
    category: EventCategory.ENTERTAINMENT,
    "date": "Dec 20, 2025",
    "location": "Kuala Lumpur Convention Centre, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://comicfiesta.org ",
    "tags": [
      "Entertainment",
      "Malaysia",
      "B2C"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "255",
    "name": "TOYCON Philippines 2025",
    "description": "TOYCON Philippines 2025 is a premier Entertainment event held in Manila, Philippines. Join industry leaders and innovators at SMX Convention Center Manila.",
    category: EventCategory.ENTERTAINMENT,
    "date": "Jun 13, 2025",
    "location": "SMX Convention Center Manila, Manila",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://allevents.in/manila/toycon-2025-official-event-page",
    "tags": [
      "Entertainment",
      "Philippines",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "256",
    "name": "Cambodia ICT & Digital Innovation Expo 2025⁸",
    "description": "Cambodia ICT & Digital Innovation Expo 2025⁸ is a premier Entertainment event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exh. Ctr.",
    category: EventCategory.ENTERTAINMENT,
    "date": "Sep 8, 2025",
    "location": "Diamond Island Exh. Ctr, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cambodiaictexpo.com ",
    "tags": [
      "Entertainment",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "257",
    "name": "Anime Fest+ 2025",
    "description": "Anime Fest+ 2025 is a premier Entertainment event held in Petaling Jaya, Malaysia. Join industry leaders and innovators at IOI Mall Damansara.",
    category: EventCategory.ENTERTAINMENT,
    "date": "Apr 19, 2025",
    "location": "IOI Mall Damansara, Petaling Jaya",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://comicfiesta.org/our-events ",
    "tags": [
      "Entertainment",
      "Malaysia",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "258",
    "name": "ONE PIECE CARD GAME Grand Asia Open 2025",
    "description": "ONE PIECE CARD GAME Grand Asia Open 2025 is a premier Entertainment event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.ENTERTAINMENT,
    "date": "Jul 19, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://asia-en.onepiece-cardgame.com/events/2025 ",
    "tags": [
      "Entertainment",
      "Singapore",
      "B2C/B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "259",
    "name": "Theme Park Expo Vietnam 2025",
    "description": "Theme Park Expo Vietnam 2025 is a premier Entertainment event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at The ADORA Center.",
    category: EventCategory.ENTERTAINMENT,
    "date": "Aug 27, 2025",
    "location": "The ADORA Center, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://themeparkvietnam.com ",
    "tags": [
      "Entertainment",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "260",
    "name": "Theme Park Expo Vietnam 2025 (JETRO data)⁹",
    "description": "Theme Park Expo Vietnam 2025 (JETRO data)⁹ is a premier Entertainment event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at The ADORA Center.",
    category: EventCategory.ENTERTAINMENT,
    "date": "Aug 27, 2025",
    "location": "The ADORA Center, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 10,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.jetro.go.jp/en/database/j-messe/detail/145208 ",
    "tags": [
      "Entertainment",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "261",
    "name": "Industrial Transformation Asia-Pacific (ITAP)",
    "description": "Industrial Transformation Asia-Pacific (ITAP) is a premier Manufacturing event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.MANUFACTURING,
    "date": "Oct 15, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.industrial-transformation.com ",
    "tags": [
      "Manufacturing",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "262",
    "name": "Manufacturing & Trade Exposition (MTE)",
    "description": "Manufacturing & Trade Exposition (MTE) is a premier Manufacturing event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.MANUFACTURING,
    "date": "Aug 26, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://mteexpo.com.my ",
    "tags": [
      "Manufacturing",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "263",
    "name": "Manufacturing Indonesia 2025",
    "description": "Manufacturing Indonesia 2025 is a premier Manufacturing event held in Jakarta, Indonesia. Join industry leaders and innovators at JIExpo Kemayoran.",
    category: EventCategory.MANUFACTURING,
    "date": "Dec 3, 2025",
    "location": "JIExpo Kemayoran, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 37,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.manufacturingindonesia.com ",
    "tags": [
      "Manufacturing",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "264",
    "name": "Manufacturing Expo 2025",
    "description": "Manufacturing Expo 2025 is a premier Manufacturing event held in Bangkok, Thailand. Join industry leaders and innovators at BITEC.",
    category: EventCategory.MANUFACTURING,
    "date": "Jun 18, 2025",
    "location": "BITEC, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.manufacturing-expo.com ",
    "tags": [
      "Manufacturing",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "265",
    "name": "Vietnam Manufacturing Expo (VME) 2025",
    "description": "Vietnam Manufacturing Expo (VME) 2025 is a premier Manufacturing event held in Hanoi, Vietnam. Join industry leaders and innovators at I.C.E Hanoi.",
    category: EventCategory.MANUFACTURING,
    "date": "Aug 6, 2025",
    "location": "I.C.E Hanoi, Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 8,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.vme-expo.com ",
    "tags": [
      "Manufacturing",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "266",
    "name": "Laos Build Expo 2025",
    "description": "Laos Build Expo 2025 is a premier Manufacturing event held in Vientiane, Laos. Join industry leaders and innovators at National Convention Centre.",
    category: EventCategory.MANUFACTURING,
    "date": "Sep 18, 2025",
    "location": "National Convention Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.laosbuild.com ",
    "tags": [
      "Manufacturing",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "267",
    "name": "Cambodia Int’l Machinery Fair 2025",
    "description": "Cambodia Int’l Machinery Fair 2025 is a premier Manufacturing event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.MANUFACTURING,
    "date": "Dec 2, 2025",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cambodiamachineryfair.com ",
    "tags": [
      "Manufacturing",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "268",
    "name": "PSMEX & i-MTAP 2025",
    "description": "PSMEX & i-MTAP 2025 is a premier Manufacturing event held in Manila, Philippines. Join industry leaders and innovators at World Trade Centre Metro Manila.",
    category: EventCategory.MANUFACTURING,
    "date": "May 8, 2025",
    "location": "World Trade Centre Metro Manila, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://psmex.weebly.com ",
    "tags": [
      "Manufacturing",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "269",
    "name": "Metalexpo Myanmar 2025",
    "description": "Metalexpo Myanmar 2025 is a premier Manufacturing event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.MANUFACTURING,
    "date": "Dec 16, 2025",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://eventseye.com/fairs/c1/trade-shows-myanmar-burma.html ",
    "tags": [
      "Manufacturing",
      "Myanmar",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "270",
    "name": "ITB Asia 2025",
    "description": "ITB Asia 2025 is a premier Travel event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Oct 15, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.itb-asia.com ",
    "tags": [
      "Travel",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "271",
    "name": "MICE Show Asia 2025",
    "description": "MICE Show Asia 2025 is a premier Travel event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Oct 15, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.itb-asia.com ",
    "tags": [
      "Travel",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "272",
    "name": "Travel Malaysia Fair (KL) 2025",
    "description": "Travel Malaysia Fair (KL) 2025 is a premier Travel event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Apr 18, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.mattafair.org.my ",
    "tags": [
      "Travel",
      "Malaysia",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "273",
    "name": "MATTA Fair Penang 2025",
    "description": "MATTA Fair Penang 2025 is a premier Travel event held in Penang, Malaysia. Join industry leaders and innovators at SPICE Arena.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "May 24, 2025",
    "location": "SPICE Arena, Penang",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://panorama-destination.com ",
    "tags": [
      "Travel",
      "Malaysia",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "274",
    "name": "NATAS Travel Fair (Feb) 2025",
    "description": "NATAS Travel Fair (Feb) 2025 is a premier Travel event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Feb 28, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://singpromos.com ",
    "tags": [
      "Travel",
      "Singapore",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "275",
    "name": "Thailand Travel Mart Plus 2025",
    "description": "Thailand Travel Mart Plus 2025 is a premier Travel event held in Chiang Mai, Thailand. Join industry leaders and innovators at Chiang Mai Convention Centre.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Jun 4, 2025",
    "location": "Chiang Mai Convention Centre, Chiang Mai",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://thailandtravelmartplus.com ",
    "tags": [
      "Travel",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "276",
    "name": "ASEAN Tourism Forum 2025",
    "description": "ASEAN Tourism Forum 2025 is a premier Travel event held in Johor Bahru, Malaysia. Join industry leaders and innovators at DoubleTree by Hilton Johor Bahru.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Jan 15, 2025",
    "location": "DoubleTree by Hilton Johor Bahru, Johor Bahru",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.motac.gov.my ",
    "tags": [
      "Travel",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "277",
    "name": "Vietnam Int’l Travel Mart (VITM) 2025",
    "description": "Vietnam Int’l Travel Mart (VITM) 2025 is a premier Travel event held in Hanoi, Vietnam. Join industry leaders and innovators at Hanoi I.C.E.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Apr 10, 2025",
    "location": "Hanoi I.C.E, Hanoi",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 20,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://2025.vietnam.travel ",
    "tags": [
      "Travel",
      "Vietnam",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "278",
    "name": "Philippine Travel Mart 2025",
    "description": "Philippine Travel Mart 2025 is a premier Travel event held in Manila, Philippines. Join industry leaders and innovators at SMX Convention Center.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Sep 6, 2025",
    "location": "SMX Convention Center, Manila",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 40,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://exhibitstoday.ph ",
    "tags": [
      "Travel",
      "Philippines",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "279",
    "name": "Cambodia Int’l Travel Mart 2025",
    "description": "Cambodia Int’l Travel Mart 2025 is a premier Travel event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exh. Ctr.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Oct 23, 2025",
    "location": "Diamond Island Exh. Ctr, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://ttgasia.com ",
    "tags": [
      "Travel",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "280",
    "name": "Laos–Viet Trade Fair 2025",
    "description": "Laos–Viet Trade Fair 2025 is a premier Travel event held in Vientiane, Laos. Join industry leaders and innovators at Lao-ITECC Center.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Jul 17, 2025",
    "location": "Lao-ITECC Center, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://kpl.gov.la ",
    "tags": [
      "Travel",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "281",
    "name": "Myanmar Tourism Fair 2025",
    "description": "Myanmar Tourism Fair 2025 is a premier Travel event held in Nay Pyi Taw, Myanmar. Join industry leaders and innovators at Myanmar Intern’l Ctr.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Nov 10, 2025",
    "location": "Myanmar Intern’l Ctr, Nay Pyi Taw",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://theholidayandtravelmagazine.blogspot.com ",
    "tags": [
      "Travel",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "282",
    "name": "BeautyAsia Singapore 2025",
    "description": "BeautyAsia Singapore 2025 is a premier Beauty Products event held in Singapore, Singapore. Join industry leaders and innovators at Suntec Singapore Convention Centre.",
    category: EventCategory.BEAUTY,
    "date": "Feb 24, 2025",
    "location": "Suntec Singapore Convention Centre, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://beautyasia.com.sg",
    "tags": [
      "Beauty Products",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "283",
    "name": "Cosmobeauté Malaysia 2025",
    "description": "Cosmobeauté Malaysia 2025 is a premier Beauty, Cosmetics event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Kuala Lumpur Convention Centre (KLCC).",
    category: EventCategory.BEAUTY,
    "date": "Jul 15, 2025",
    "location": "Kuala Lumpur Convention Centre (KLCC), Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cosmobeauteasia.com/malaysia/",
    "tags": [
      "Beauty, Cosmetics",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "284",
    "name": "Cosmobeauté Indonesia 2025",
    "description": "Cosmobeauté Indonesia 2025 is a premier Beauty, Cosmetics event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta Convention Center (JCC).",
    category: EventCategory.BEAUTY,
    "date": "Oct 8, 2025",
    "location": "Jakarta Convention Center (JCC), Jakarta",
    "priceRange": "IDR 150,000",
    "basePrice": 150000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cosmobeauteasia.com/indonesia/",
    "tags": [
      "Beauty, Cosmetics",
      "Indonesia",
      "B2B/B2C"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "285",
    "name": "ASEANbeauty 2025",
    "description": "ASEANbeauty 2025 is a premier Beauty, Cosmetics event held in Bangkok, Thailand. Join industry leaders and innovators at BITEC.",
    category: EventCategory.BEAUTY,
    "date": "May 8, 2025",
    "location": "BITEC, Bangkok",
    "priceRange": "฿50",
    "basePrice": 50,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.aseanbeautyshow.com",
    "tags": [
      "Beauty, Cosmetics",
      "Thailand",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "286",
    "name": "Vietbeauty 2025",
    "description": "Vietbeauty 2025 is a premier Beauty, Cosmetics event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.BEAUTY,
    "date": "Jul 24, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.vietbeautyshow.com",
    "tags": [
      "Beauty, Cosmetics",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "287",
    "name": "Cosmobeauté Vietnam 2025",
    "description": "Cosmobeauté Vietnam 2025 is a premier Beauty, Cosmetics event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.BEAUTY,
    "date": "Aug 1, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cosmobeauteasia.com/vietnam/",
    "tags": [
      "Beauty, Cosmetics",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "288",
    "name": "Laos Beauty Show 2025",
    "description": "Laos Beauty Show 2025 is a premier Beauty, Cosmetics event held in Vientiane, Laos. Join industry leaders and innovators at Lao-ITECC Centre.",
    category: EventCategory.BEAUTY,
    "date": "Sep 19, 2025",
    "location": "Lao-ITECC Centre, Vientiane",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.laotradeportal.gov.la",
    "tags": [
      "Beauty, Cosmetics",
      "Laos",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "289",
    "name": "Cambodia Beauty Expo 2025",
    "description": "Cambodia Beauty Expo 2025 is a premier Beauty, Cosmetics event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.BEAUTY,
    "date": "Oct 15, 2025",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cambodiabeautyexpo.com",
    "tags": [
      "Beauty, Cosmetics",
      "Cambodia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "290",
    "name": "Cosmobeauté Philippines 2025",
    "description": "Cosmobeauté Philippines 2025 is a premier Beauty, Cosmetics event held in Manila, Philippines. Join industry leaders and innovators at World Trade Center Metro Manila.",
    category: EventCategory.BEAUTY,
    "date": "Jun 4, 2025",
    "location": "World Trade Center Metro Manila, Manila",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://cosmobeautephilippines.com",
    "tags": [
      "Beauty, Cosmetics",
      "Philippines",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "291",
    "name": "Myanmar Beauty Expo 2025",
    "description": "Myanmar Beauty Expo 2025 is a premier Beauty, Cosmetics event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.BEAUTY,
    "date": "Nov 14, 2025",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.myanmarbeautyexpo.com",
    "tags": [
      "Beauty, Cosmetics",
      "Myanmar",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "292",
    "name": "Singapore International Jewelry Expo (SIJE)",
    "description": "Singapore International Jewelry Expo (SIJE) is a premier Jewelry & Accessories event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.JEWELRY,
    "date": "Jul 10, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.sije.sg",
    "tags": [
      "Jewelry & Accessories",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "293",
    "name": "Malaysia International Jewelry Fair (MIJF)",
    "description": "Malaysia International Jewelry Fair (MIJF) is a premier Jewelry & Accessories event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Kuala Lumpur Convention Centre (KLCC).",
    category: EventCategory.JEWELRY,
    "date": "Apr 18, 2025",
    "location": "Kuala Lumpur Convention Centre (KLCC), Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.mijf.com.my",
    "tags": [
      "Jewelry & Accessories",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "294",
    "name": "Indonesia International Jewelry Fair (IIJF)",
    "description": "Indonesia International Jewelry Fair (IIJF) is a premier Jewelry & Accessories event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta Convention Center (JCC).",
    category: EventCategory.JEWELRY,
    "date": "Sep 18, 2025",
    "location": "Jakarta Convention Center (JCC), Jakarta",
    "priceRange": "IDR 150,000",
    "basePrice": 150000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.indonesiajewelryfair.com",
    "tags": [
      "Jewelry & Accessories",
      "Indonesia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "295",
    "name": "Bangkok Gems & Jewelry Fair",
    "description": "Bangkok Gems & Jewelry Fair is a premier Gems, Jewelry event held in Bangkok, Thailand. Join industry leaders and innovators at Queen Sirikit National Convention Center.",
    category: EventCategory.JEWELRY,
    "date": "Feb 24, 2025",
    "location": "Queen Sirikit National Convention Center, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.bkkgems.com",
    "tags": [
      "Gems, Jewelry",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "296",
    "name": "Vietnam International Jewelry Fair",
    "description": "Vietnam International Jewelry Fair is a premier Jewelry & Accessories event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.JEWELRY,
    "date": "Nov 6, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.jewelryfair.vn",
    "tags": [
      "Jewelry & Accessories",
      "Vietnam",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "297",
    "name": "Cambodia Gems & Jewelry Fair",
    "description": "Cambodia Gems & Jewelry Fair is a premier Gems, Jewelry event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.JEWELRY,
    "date": "May 15, 2025",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cambodia-gemsjewelryfair.com",
    "tags": [
      "Gems, Jewelry",
      "Cambodia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "298",
    "name": "Myanmar International Gems & Jewelry Expo",
    "description": "Myanmar International Gems & Jewelry Expo is a premier Gems, Jewelry event held in Nay Pyi Taw, Myanmar. Join industry leaders and innovators at Mani Yadana Jade Hall.",
    category: EventCategory.JEWELRY,
    "date": "Mar 11, 2025",
    "location": "Mani Yadana Jade Hall, Nay Pyi Taw",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.myanmarjewelleryexpo.com",
    "tags": [
      "Gems, Jewelry",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "299",
    "name": "Manila FAME (Jewelry & Accessories segment)",
    "description": "Manila FAME (Jewelry & Accessories segment) is a premier Accessories, Jewelry event held in Manila, Philippines. Join industry leaders and innovators at World Trade Center Metro Manila.",
    category: EventCategory.JEWELRY,
    "date": "Oct 17, 2025",
    "location": "World Trade Center Metro Manila, Manila",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://manilafame.com",
    "tags": [
      "Accessories, Jewelry",
      "Philippines",
      "B2B/B2C"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "300",
    "name": "Vientiane Jewelry & Handicraft Expo",
    "description": "Vientiane Jewelry & Handicraft Expo is a premier Jewelry & Handicrafts event held in Vientiane, Laos. Join industry leaders and innovators at Lao-ITECC.",
    category: EventCategory.JEWELRY,
    "date": "Aug 21, 2025",
    "location": "Lao-ITECC, Vientiane",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.laotradeportal.gov.la",
    "tags": [
      "Jewelry & Handicrafts",
      "Laos",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "301",
    "name": "Manufacturing Expo 2025",
    "description": "Manufacturing Expo 2025 is a premier Industrial Machinery, Automation event held in Bangkok, Thailand. Join industry leaders and innovators at BITEC.",
    category: EventCategory.MANUFACTURING,
    "date": "Jun 19, 2025",
    "location": "BITEC, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 45,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.bangkokpost.com/thailand/pr/3052540/manufacturing-expo-2025-showcases-global-innovation-in-bangkok- ",
    "tags": [
      "Industrial Machinery, Automation",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "302",
    "name": "Industrial Transformation Asia-Pacific (ITAP)",
    "description": "Industrial Transformation Asia-Pacific (ITAP) is a premier Industry 4.0, Robotics, Smart Factory event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.B2B_TRADE,
    "date": "Oct 15, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 20,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.industrial-transformation.com ",
    "tags": [
      "Industry 4.0, Robotics, Smart Factory",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "303",
    "name": "MIMF 2025",
    "description": "MIMF 2025 is a premier Industrial Robots, 3D Printing, Packaging event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "Jul 10, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 8,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.tradeindia.com/tradeshows/130299/mimf-malaysia-international-machinery-fair-2025.html ",
    "tags": [
      "Industrial Robots, 3D Printing, Packaging",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "304",
    "name": "VINAMAC EXPO 2025",
    "description": "VINAMAC EXPO 2025 is a premier Machinery, Welding, Metalworking event held in Hanoi, Vietnam. Join industry leaders and innovators at I.C.E.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "May 14, 2025",
    "location": "I.C.E, Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 10,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://vovworld.vn/en-US/news/vinamac-expo-2025-draws-250-vietnamese-and-international-enterprises-1391143.vov ",
    "tags": [
      "Machinery, Welding, Metalworking",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "305",
    "name": "PSMEX & i-MTAP 2025",
    "description": "PSMEX & i-MTAP 2025 is a premier Manufacturing, Subcontracting, Tools event held in Manila, Philippines. Join industry leaders and innovators at WTC Metro Manila.",
    category: EventCategory.MANUFACTURING,
    "date": "May 8, 2025",
    "location": "WTC Metro Manila, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 12,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://psmex.weebly.com ",
    "tags": [
      "Manufacturing, Subcontracting, Tools",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "306",
    "name": "CIMIF 2025",
    "description": "CIMIF 2025 is a premier Machine Tools, Automation, Petrochemicals event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.MANUFACTURING,
    "date": "Aug 6, 2025",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 6,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.jetro.go.jp/en/database/j-messe/tradefair/detail/121235 ",
    "tags": [
      "Machine Tools, Automation, Petrochemicals",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "307",
    "name": "Laos Build Expo 2025",
    "description": "Laos Build Expo 2025 is a premier Construction Machinery, Equipment event held in Vientiane, Laos. Join industry leaders and innovators at National Convention Centre.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "Sep 18, 2025",
    "location": "National Convention Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 3,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.eventseye.com/fairs/f-laobuild-22056-1.html ",
    "tags": [
      "Construction Machinery, Equipment",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "308",
    "name": "Metalexpo Myanmar 2025",
    "description": "Metalexpo Myanmar 2025 is a premier Metalworking, CNC, Automation event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.MANUFACTURING,
    "date": "Dec 16, 2025",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.eventseye.com/fairs/c1/trade-shows-myanmar-burma.html ",
    "tags": [
      "Metalworking, CNC, Automation",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "309",
    "name": "BUILDERS Myanmar 2025",
    "description": "BUILDERS Myanmar 2025 is a premier Industrial Automation, Robotics event held in Yangon, Myanmar. Join industry leaders and innovators at Novotel Yangon Max Convention Centre.",
    category: EventCategory.MANUFACTURING,
    "date": "Feb 12, 2025",
    "location": "Novotel Yangon Max Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://thebeat.asia/bangkok/the-list/event/thailand-industrial-fair-2025 ",
    "tags": [
      "Industrial Automation, Robotics",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "310",
    "name": "Manufacturing Expo 2025",
    "description": "Manufacturing Expo 2025 is a premier  Industrial Machinery event held in Bangkok, Thailand. Join industry leaders and innovators at BITEC.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "Jun 19, 2025",
    "location": "BITEC, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.manufacturing-expo.com ",
    "tags": [
      " Industrial Machinery",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "311",
    "name": "Industrial Transformation Asia-Pacific (ITAP)",
    "description": "Industrial Transformation Asia-Pacific (ITAP) is a premier  Industrial Machinery event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "Oct 15, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.industrial-transformation.com ",
    "tags": [
      " Industrial Machinery",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "312",
    "name": "MIMF 2025",
    "description": "MIMF 2025 is a premier  Industrial Machinery event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "Jul 10, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://tradeindia.com ",
    "tags": [
      " Industrial Machinery",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "313",
    "name": "VINAMAC EXPO 2025",
    "description": "VINAMAC EXPO 2025 is a premier  Industrial Machinery event held in Hanoi, Vietnam. Join industry leaders and innovators at I.C.E.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "May 14, 2025",
    "location": "I.C.E, Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 10,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://vovworld.vn ",
    "tags": [
      " Industrial Machinery",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "314",
    "name": "PSMEX & i-MTAP 2025",
    "description": "PSMEX & i-MTAP 2025 is a premier  Industrial Machinery event held in Manila, Philippines. Join industry leaders and innovators at WTC Metro Manila.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "May 8, 2025",
    "location": "WTC Metro Manila, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://psmex.weebly.com ",
    "tags": [
      " Industrial Machinery",
      "Philippines",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "315",
    "name": "CIMIF 2025",
    "description": "CIMIF 2025 is a premier  Industrial Machinery event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "Aug 6, 2025",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.jetro.go.jp ",
    "tags": [
      " Industrial Machinery",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "316",
    "name": "Laos Build Expo 2025",
    "description": "Laos Build Expo 2025 is a premier  Industrial Machinery event held in Vientiane, Laos. Join industry leaders and innovators at National Convention Centre.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "Sep 18, 2025",
    "location": "National Convention Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 3,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://eventseye.com ",
    "tags": [
      " Industrial Machinery",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "317",
    "name": "Metalexpo Myanmar 2025",
    "description": "Metalexpo Myanmar 2025 is a premier  Industrial Machinery event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "Dec 16, 2025",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://eventseye.com ",
    "tags": [
      " Industrial Machinery",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "318",
    "name": "BUILDERS Myanmar 2025",
    "description": "BUILDERS Myanmar 2025 is a premier  Industrial Machinery event held in Yangon, Myanmar. Join industry leaders and innovators at Novotel Yangon Max Convention Centre.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "Feb 12, 2025",
    "location": "Novotel Yangon Max Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://thebeat.asia ",
    "tags": [
      " Industrial Machinery",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "319",
    "name": "VINAMAC EXPO 2025",
    "description": "VINAMAC EXPO 2025 is a premier  Industrial Machinery event held in Hanoi, Vietnam. Join industry leaders and innovators at I.C.E.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "May 14, 2025",
    "location": "I.C.E, Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 10,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://vovworld.vn ",
    "tags": [
      " Industrial Machinery",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "320",
    "name": "CommunicAsia 2025",
    "description": "CommunicAsia 2025 is a premier  ICT - Telecom event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.ICT_TELECOM,
    "date": "May 27, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://asiatechxsg.com/communicasia/ ",
    "tags": [
      " ICT - Telecom",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "321",
    "name": "BroadcastAsia 2025",
    "description": "BroadcastAsia 2025 is a premier  ICT - Telecom event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.ICT_TELECOM,
    "date": "May 27, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.pcbshop.org/en/exhibition/detail.asp?Exhibition_Code=Communic ",
    "tags": [
      " ICT - Telecom",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "322",
    "name": "GovWare 2025",
    "description": "GovWare 2025 is a premier  ICT - Telecom event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo & Convention Centre.",
    category: EventCategory.ICT_TELECOM,
    "date": "Oct 21, 2025",
    "location": "Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.ceec.com.sg/events/govware-2025/ ",
    "tags": [
      " ICT - Telecom",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "323",
    "name": "Malaysia Technology Expo (MTE) 2025",
    "description": "Malaysia Technology Expo (MTE) 2025 is a premier  ICT - Telecom event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at World Trade Centre Kuala Lumpur.",
    category: EventCategory.ICT_TELECOM,
    "date": "Feb 20, 2025",
    "location": "World Trade Centre Kuala Lumpur, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://ifia.com/malaysia-technology-expo-2025/ ",
    "tags": [
      " ICT - Telecom",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "324",
    "name": "Smart Nation Expo 2025",
    "description": "Smart Nation Expo 2025 is a premier  ICT - Telecom event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.ICT_TELECOM,
    "date": "Nov 18, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://smartnationexpo.org/about-the-event/ ",
    "tags": [
      " ICT - Telecom",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "325",
    "name": "IISMEX – Smart City Expo & Forum 2025",
    "description": "IISMEX – Smart City Expo & Forum 2025 is a premier  ICT - Telecom event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta Convention Centre (JCC).",
    category: EventCategory.ICT_TELECOM,
    "date": "Aug 13, 2025",
    "location": "Jakarta Convention Centre (JCC), Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.tradeindia.com/tradeshows/142345/iismex-indonesia-international-smart-city-expo-forum-2025.html ",
    "tags": [
      " ICT - Telecom",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "326",
    "name": "INTI Satellite & Innovation Expo 2025",
    "description": "INTI Satellite & Innovation Expo 2025 is a premier  ICT - Telecom event held in Jakarta, Indonesia. Join industry leaders and innovators at JIExpo, Kemayoran.",
    category: EventCategory.ICT_TELECOM,
    "date": "Sep 2, 2025",
    "location": "JIExpo, Kemayoran, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.youtube.com/watch?v=PCebyzdGBO0 ",
    "tags": [
      " ICT - Telecom",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "327",
    "name": "Philippine Tech Show 2025",
    "description": "Philippine Tech Show 2025 is a premier  ICT - Telecom event held in Manila, Philippines. Join industry leaders and innovators at SMX Convention Center Manila.",
    category: EventCategory.ICT_TELECOM,
    "date": "Mar 24, 2025",
    "location": "SMX Convention Center Manila, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.philtechshow.net ",
    "tags": [
      " ICT - Telecom",
      "Philippines",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "328",
    "name": "Vietnam ICT COMM 2025",
    "description": "Vietnam ICT COMM 2025 is a premier  ICT - Telecom event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.ICT_TELECOM,
    "date": "Jun 5, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://ictcomm.vn ",
    "tags": [
      " ICT - Telecom",
      "Vietnam",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "329",
    "name": "Asia IoT Business Platform 2025",
    "description": "Asia IoT Business Platform 2025 is a premier  ICT - Telecom event held in Bangkok, Thailand. Join industry leaders and innovators at IMPACT Exhibition & Convention Centre.",
    category: EventCategory.ICT_TELECOM,
    "date": "Nov 19, 2025",
    "location": "IMPACT Exhibition & Convention Centre, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://digitechasean.com",
    "tags": [
      " ICT - Telecom",
      "Thailand",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "330",
    "name": "Laos ICT Expo 2025",
    "description": "Laos ICT Expo 2025 is a premier  ICT - Telecom event held in Vientiane, Laos. Join industry leaders and innovators at National Convention Centre.",
    category: EventCategory.ICT_TELECOM,
    "date": "Nov 12, 2025",
    "location": "National Convention Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.laosictexpo.com",
    "tags": [
      " ICT - Telecom",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "331",
    "name": "Cambodia ICT & Digital Innovation Expo 2025",
    "description": "Cambodia ICT & Digital Innovation Expo 2025 is a premier  ICT - Telecom event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.ICT_TELECOM,
    "date": "Sep 8, 2025",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cambodiaictexpo.com",
    "tags": [
      " ICT - Telecom",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "332",
    "name": "AI Yangon Expo 2025",
    "description": "AI Yangon Expo 2025 is a premier  ICT - Telecom event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre.",
    category: EventCategory.ICT_TELECOM,
    "date": "Feb 28, 2025",
    "location": "Yangon Convention Centre, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.urdupoint.com/en/world/myanmar-holds-ai-yangon-2025-expo-1934502.html ",
    "tags": [
      " ICT - Telecom",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "333",
    "name": "CommunicAsia 2025",
    "description": "CommunicAsia 2025 is a premier  ICT Tech event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.ICT_TELECOM,
    "date": "May 27, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://asiatechxsg.com/communicasia/",
    "tags": [
      " ICT Tech",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "334",
    "name": "BroadcastAsia 2025",
    "description": "BroadcastAsia 2025 is a premier  ICT Tech event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.ICT_TELECOM,
    "date": "May 27, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://blendvision.com/en/blog/broadcastasia-2025-navigating-the-cloud-driven-future-of-broadcast-media ",
    "tags": [
      " ICT Tech",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "335",
    "name": "GovWare 2025",
    "description": "GovWare 2025 is a premier  ICT Tech event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo & Convention Centre.",
    category: EventCategory.ICT_TELECOM,
    "date": "Oct 21, 2025",
    "location": "Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.ceec.com.sg/events/govware-2025/",
    "tags": [
      " ICT Tech",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "336",
    "name": "Data Centre World Asia 2025",
    "description": "Data Centre World Asia 2025 is a premier  ICT Tech event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.ICT_TELECOM,
    "date": "Oct 8, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.datacentreworldasia.com",
    "tags": [
      " ICT Tech",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "337",
    "name": "Asia IoT Business Platform 2025",
    "description": "Asia IoT Business Platform 2025 is a premier  ICT Tech event held in Bangkok, Thailand. Join industry leaders and innovators at IMPACT Exhibition & Convention Centre.",
    category: EventCategory.ICT_TELECOM,
    "date": "Nov 19, 2025",
    "location": "IMPACT Exhibition & Convention Centre, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://digitechasean.com",
    "tags": [
      " ICT Tech",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "338",
    "name": "BroadcastAsia & CommunicAsia (ATxSG) 2025",
    "description": "BroadcastAsia & CommunicAsia (ATxSG) 2025 is a premier  ICT Tech event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.ICT_TELECOM,
    "date": "May 27, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://asiatechxsg.com",
    "tags": [
      " ICT Tech",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "339",
    "name": "ITB Asia 2025",
    "description": "ITB Asia 2025 is a premier  Hospitality & Tourism event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Oct 15, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.itb-asia.com ",
    "tags": [
      " Hospitality & Tourism",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "340",
    "name": "APEX FTE Asia Expo 2025",
    "description": "APEX FTE Asia Expo 2025 is a premier  Hospitality & Tourism event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Nov 11, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.futuretravelexperience.com/fteasia/ ",
    "tags": [
      " Hospitality & Tourism",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "341",
    "name": "AHICE South East Asia 2025",
    "description": "AHICE South East Asia 2025 is a premier  Hospitality & Tourism event held in Singapore, Singapore. Join industry leaders and innovators at Pan Pacific Singapore.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Feb 24, 2025",
    "location": "Pan Pacific Singapore, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.traveldailymedia.com/events/ahice-2025/ ",
    "tags": [
      " Hospitality & Tourism",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "342",
    "name": "Hospitality Suppliers Expo 2025",
    "description": "Hospitality Suppliers Expo 2025 is a premier  Hospitality & Tourism event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Vivatel Hotel.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "May 28, 2025",
    "location": "Vivatel Hotel, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.hospitalityexpo.asia ",
    "tags": [
      " Hospitality & Tourism",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "343",
    "name": "Malaysia International Tourism & Hospitality Expo 2025",
    "description": "Malaysia International Tourism & Hospitality Expo 2025 is a premier  Hospitality & Tourism event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Sep 10, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.expo-events.com/mith2025",
    "tags": [
      " Hospitality & Tourism",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "344",
    "name": "Nusantara Food & Hotel Expo 2025",
    "description": "Nusantara Food & Hotel Expo 2025 is a premier  Hospitality & Tourism event held in Jakarta, Indonesia. Join industry leaders and innovators at ICE BSD.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Jul 3, 2025",
    "location": "ICE BSD, Jakarta",
    "priceRange": "IDR 150,000",
    "basePrice": 150000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://infobrand.id/nusantara-food-hotel-expo-2025 ",
    "tags": [
      " Hospitality & Tourism",
      "Indonesia",
      "B2B/B2C"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "345",
    "name": "Thailand Tourism Festival 2025",
    "description": "Thailand Tourism Festival 2025 is a premier  Hospitality & Tourism event held in Bangkok, Thailand. Join industry leaders and innovators at Queen Sirikit Nat’l Convention Centre.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Mar 26, 2025",
    "location": "Queen Sirikit Nat’l Convention Centre, Bangkok",
    "priceRange": "฿50",
    "basePrice": 50,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.tourismthailand.org/ttf ",
    "tags": [
      " Hospitality & Tourism",
      "Thailand",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "346",
    "name": "Indonesia Hospitality & Tourism Expo 2025",
    "description": "Indonesia Hospitality & Tourism Expo 2025 is a premier  Hospitality & Tourism event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta Convention Centre.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Aug 20, 2025",
    "location": "Jakarta Convention Centre, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.ihtexpo.com",
    "tags": [
      " Hospitality & Tourism",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "347",
    "name": "Vietnam International Travel Mart 2025 (VITM Hanoi)",
    "description": "Vietnam International Travel Mart 2025 (VITM Hanoi) is a premier  Hospitality & Tourism event held in Hanoi, Vietnam. Join industry leaders and innovators at ICE Hanoi.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Apr 11, 2025",
    "location": "ICE Hanoi, Hanoi",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://en.qdnd.vn/news/vietnam-international-travel-mart-2025 ",
    "tags": [
      " Hospitality & Tourism",
      "Vietnam",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "348",
    "name": "Vietnam Tourism & Hospitality Expo 2025",
    "description": "Vietnam Tourism & Hospitality Expo 2025 is a premier  Hospitality & Tourism event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.HOSPITALITY_TOURISM,
    "date": "Sep 15, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.vietnamexpo.c",
    "tags": [
      " Hospitality & Tourism",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "349",
    "name": "FHA–Food & Beverage 2025 (Halal Segment)",
    "description": "FHA–Food & Beverage 2025 (Halal Segment) is a premier Halal Products event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.HALAL,
    "date": "Apr 8, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://fhafnb.com ",
    "tags": [
      "Halal Products",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "350",
    "name": "The Wedding Affair & Halal Expo 2025",
    "description": "The Wedding Affair & Halal Expo 2025 is a premier Halal Products event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.HALAL,
    "date": "Jun 13, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://ahboy.com/event/halal-expo/ ",
    "tags": [
      "Halal Products",
      "Singapore",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "351",
    "name": "MIHAS Halal Expo 2025",
    "description": "MIHAS Halal Expo 2025 is a premier Halal Products event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.HALAL,
    "date": "Apr 8, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.mihas.com.my ",
    "tags": [
      "Halal Products",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "352",
    "name": "Halal Indo 2025",
    "description": "Halal Indo 2025 is a premier Halal Products event held in Tangerang, Indonesia. Join industry leaders and innovators at ICE BSD City.",
    category: EventCategory.HALAL,
    "date": "Sep 25, 2025",
    "location": "ICE BSD City, Tangerang",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://kompasiana.com/destianirahmawati4905/halal-indo-2025 ",
    "tags": [
      "Halal Products",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "353",
    "name": "MEGA HALAL Bangkok 2025",
    "description": "MEGA HALAL Bangkok 2025 is a premier Halal Products event held in Bangkok, Thailand. Join industry leaders and innovators at BITEC Bangna.",
    category: EventCategory.HALAL,
    "date": "Jul 16, 2025",
    "location": "BITEC Bangna, Bangkok",
    "priceRange": "฿50",
    "basePrice": 50,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://megahalal-bangkok.com ",
    "tags": [
      "Halal Products",
      "Thailand",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "354",
    "name": "Vietnam–Singapore Halal Trade Seminar 2025",
    "description": "Vietnam–Singapore Halal Trade Seminar 2025 is a premier Halal Products event held in Hanoi/Singapore, Vietnam. Join industry leaders and innovators at Hybrid (Hanoi I.C.E & Online).",
    category: EventCategory.HALAL,
    "date": "May 24, 2025",
    "location": "Hybrid (Hanoi I.C.E & Online), Hanoi/Singapore",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://vntradesg.org/en/invitation-to-vietnam-singapore-halal-trade-seminar-2025/ ",
    "tags": [
      "Halal Products",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "355",
    "name": "InsureTech Connect Asia (ITC Asia) 2025",
    "description": "InsureTech Connect Asia (ITC Asia) 2025 is a premier Insurance Innovation event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo & Convention Centre.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Jun 3, 2025",
    "location": "Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://asia.insuretechconnect.com ",
    "tags": [
      "Insurance Innovation",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "356",
    "name": "InsurInnovator Connect Asia (IIC Asia) 2025",
    "description": "InsurInnovator Connect Asia (IIC Asia) 2025 is a premier InsurTech & Reinsurance event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Sep 24, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.actuaries.org.sg/events/insurinnovator-connect-asia-2025-iic-asia-2025 ",
    "tags": [
      "InsurTech & Reinsurance",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "357",
    "name": "Singapore International Reinsurance Conference (SIRC) 2025",
    "description": "Singapore International Reinsurance Conference (SIRC) 2025 is a premier Reinsurance event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.B2B_TRADE,
    "date": "Oct 14, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.limestreetguide.com/event/singapore-international-reinsurance-conference-sirc-2025/ ",
    "tags": [
      "Reinsurance",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "358",
    "name": "Asian Banking & Finance and Insurance Asia Summit – Singapore",
    "description": "Asian Banking & Finance and Insurance Asia Summit – Singapore is a premier Banking & Insurance event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo & Convention Centre.",
    category: EventCategory.FINTECH,
    "date": "Sep 25, 2025",
    "location": "Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://asianbankingandfinance.net/event/asian-banking-finance-and-insurance-asia-summit-singapore-september-25-2025 ",
    "tags": [
      "Banking & Insurance",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "359",
    "name": "MyFintech Week (MyFW) 2025",
    "description": "MyFintech Week (MyFW) 2025 is a premier FinTech & Banking event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Kuala Lumpur Convention Centre.",
    category: EventCategory.TECH_INNOVATION,
    "date": "TBA",
    "location": "Kuala Lumpur Convention Centre, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://fintechnews.my/fintech-events-conference-forum-expo-malaysia/event/myfintech-week-2025-myfw-2025/ ",
    "tags": [
      "FinTech & Banking",
      "Malaysia",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "360",
    "name": "Asian Banking & Finance & Insurance Asia Summit – Malaysia",
    "description": "Asian Banking & Finance & Insurance Asia Summit – Malaysia is a premier Banking & Insurance event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Renaissance KL Hotel & Convention Centre.",
    category: EventCategory.FINTECH,
    "date": "Apr 15, 2025",
    "location": "Renaissance KL Hotel & Convention Centre, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://insuranceasia.com/event/asian-banking-finance-and-insurance-asia-summit-malaysia-april-15-2025 ",
    "tags": [
      "Banking & Insurance",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "361",
    "name": "BankTech Asia Conference & Exhibition 2025",
    "description": "BankTech Asia Conference & Exhibition 2025 is a premier Banking Technology event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Bangsar South City.",
    category: EventCategory.TECH_INNOVATION,
    "date": "TBA",
    "location": "Bangsar South City, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://10times.com/banktechasia-expo ",
    "tags": [
      "Banking Technology",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "362",
    "name": "InsurInnovator Connect Indonesia 2025",
    "description": "InsurInnovator Connect Indonesia 2025 is a premier Insurance Innovation event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta Convention Centre.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Jul 2, 2025",
    "location": "Jakarta Convention Centre, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.szwgroup.com/insurinnovator-connect-indonesia/ ",
    "tags": [
      "Insurance Innovation",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "363",
    "name": "World Financial Innovation Series (WFIS) – Indonesia 2025",
    "description": "World Financial Innovation Series (WFIS) – Indonesia 2025 is a premier Banking & FinTech event held in Jakarta, Indonesia. Join industry leaders and innovators at Sheraton Grand Jakarta.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Nov 25, 2025",
    "location": "Sheraton Grand Jakarta, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.indonesia.worldfis.com/indonesia-leading-banking-exhibition-wfis-2025/ ",
    "tags": [
      "Banking & FinTech",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "364",
    "name": "Asian Banking & Finance & Insurance Asia Summit – Vietnam",
    "description": "Asian Banking & Finance & Insurance Asia Summit – Vietnam is a premier Banking & Insurance event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at Saigon Exhibition & Convention Center (SECC).",
    category: EventCategory.FINTECH,
    "date": "May 13, 2025",
    "location": "Saigon Exhibition & Convention Center (SECC), Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://asianbankingandfinance.net/event/asian-banking-finance-and-insurance-asia-summit-vietnam-may-13-2025 ",
    "tags": [
      "Banking & Insurance",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "365",
    "name": "Vietnam Insurance Summit 2025 (VIS 2025)",
    "description": "Vietnam Insurance Summit 2025 (VIS 2025) is a premier Insurance Digitalization event held in Quy Nhon, Vietnam. Join industry leaders and innovators at Anya Premier Quy Nhon Hotel.",
    category: EventCategory.INSURANCE,
    "date": "Aug 1, 2025",
    "location": "Anya Premier Quy Nhon Hotel, Quy Nhon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://insurancesummit.vn/2025/en/ ",
    "tags": [
      "Insurance Digitalization",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "366",
    "name": "Hanoi Re International Conference (HRIC) 2025",
    "description": "Hanoi Re International Conference (HRIC) 2025 is a premier Reinsurance event held in Da Lat, Vietnam. Join industry leaders and innovators at Dalat Palace Heritage Hotel.",
    category: EventCategory.B2B_TRADE,
    "date": "May 14, 2025",
    "location": "Dalat Palace Heritage Hotel, Da Lat",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.hanoire.com/en/hanoi-re-international-conference-2025-connecting-leaders-sharing-visions-at-1500/ ",
    "tags": [
      "Reinsurance",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "367",
    "name": "**Future Finance",
    "description": "**Future Finance is a premier 45980 event held in Vietnam, Vietnam 2025**. Join industry leaders and innovators at Ho Chi Minh City.",
    category: EventCategory.B2B_TRADE,
    "date": "TBA",
    "location": "Ho Chi Minh City, Vietnam",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "N/A",
    "tags": [
      "45980",
      "Vietnam 2025**",
      "Banking & Digital Finance"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "368",
    "name": "Trade Expo Indonesia (TEI) 2025",
    "description": "Trade Expo Indonesia (TEI) 2025 is a premier General Trade event held in BSD City, Indonesia. Join industry leaders and innovators at ICE BSD.",
    category: EventCategory.GENERAL_TRADE,
    "date": "Oct 15, 2025",
    "location": "ICE BSD, BSD City",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.tradexpoindonesia.com ",
    "tags": [
      "General Trade",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "369",
    "name": "Vietnam International Trade Fair (VIETNAM EXPO) 2025",
    "description": "Vietnam International Trade Fair (VIETNAM EXPO) 2025 is a premier General Trade event held in Hanoi, Vietnam. Join industry leaders and innovators at I.C.E.",
    category: EventCategory.GENERAL_TRADE,
    "date": "Apr 2, 2025",
    "location": "I.C.E, Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://vietnamexpo.com.vn/en/overview/ ",
    "tags": [
      "General Trade",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "370",
    "name": "ASEAN-China Expo 2025",
    "description": "ASEAN-China Expo 2025 is a premier General Trade event held in Nanning, China¹. Join industry leaders and innovators at Guangxi International Convention Ctr.",
    category: EventCategory.GENERAL_TRADE,
    "date": "Sep 10, 2025",
    "location": "Guangxi International Convention Ctr, Nanning",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.asean-china-ceca.com [external source]",
    "tags": [
      "General Trade",
      "China¹",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "371",
    "name": "Lao–Viet Trade Fair 2025",
    "description": "Lao–Viet Trade Fair 2025 is a premier General Trade event held in Vientiane, Laos. Join industry leaders and innovators at Lao-ITECC Centre.",
    category: EventCategory.GENERAL_TRADE,
    "date": "Jul 17, 2025",
    "location": "Lao-ITECC Centre, Vientiane",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://kpl.gov.la/En/detail.aspx?id=89937 ",
    "tags": [
      "General Trade",
      "Laos",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "372",
    "name": "MITEC International Trade Fair for Manufacturing & Trade Solutions (MTE) 2025",
    "description": "MITEC International Trade Fair for Manufacturing & Trade Solutions (MTE) 2025 is a premier General Trade event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.GENERAL_TRADE,
    "date": "Aug 26, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://tradefairdates.com/MANUFACTURING-TRADE-EXPOSITION-M6364/Kuala-Lumpur.html ",
    "tags": [
      "General Trade",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "373",
    "name": "ARCHIDEX 2025",
    "description": "ARCHIDEX 2025 is a premier General Trade event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC & KLCC.",
    category: EventCategory.GENERAL_TRADE,
    "date": "Jul 21, 2025",
    "location": "MITEC & KLCC, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.jetro.go.jp/en/database/j-messe/tradefair/detail/153021 ",
    "tags": [
      "General Trade",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "374",
    "name": "Myanmar PlasPrintPack 2025",
    "description": "Myanmar PlasPrintPack 2025 is a premier General Trade event held in Yangon, Myanmar. Join industry leaders and innovators at Yangon Convention Centre (YCC).",
    category: EventCategory.GENERAL_TRADE,
    "date": "Aug 20, 2025",
    "location": "Yangon Convention Centre (YCC), Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "JETRO database ",
    "tags": [
      "General Trade",
      "Myanmar",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "375",
    "name": "Cambodia International Trade Fair 2025",
    "description": "Cambodia International Trade Fair 2025 is a premier General Trade event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Diamond Island Exhibition Center.",
    category: EventCategory.GENERAL_TRADE,
    "date": "Aug 6, 2025",
    "location": "Diamond Island Exhibition Center, Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.jetro.go.jp/en/database/j-messe/tradefair/detail/123263 ",
    "tags": [
      "General Trade",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "376",
    "name": "Indo Defence 2025",
    "description": "Indo Defence 2025 is a premier General Trade event held in Jakarta, Indonesia. Join industry leaders and innovators at JIExpo Kemayoran.",
    category: EventCategory.GENERAL_TRADE,
    "date": "Jun 11, 2025",
    "location": "JIExpo Kemayoran, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://indodefence.com ",
    "tags": [
      "General Trade",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "377",
    "name": "ITB Asia 2025",
    "description": "ITB Asia 2025 is a premier General Trade event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.GENERAL_TRADE,
    "date": "Oct 15, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.itb-asia.com ",
    "tags": [
      "General Trade",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "378",
    "name": "Singapore Airshow 2026",
    "description": "Singapore Airshow 2026 is a premier Aerospace & Defense event held in Singapore, Singapore. Join industry leaders and innovators at Changi Exhibition Centre.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "TBA",
    "location": "Changi Exhibition Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.singaporeairshow.com.sg ",
    "tags": [
      "Aerospace & Defense",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "379",
    "name": "IMDEX Asia 2025",
    "description": "IMDEX Asia 2025 is a premier Aerospace & Defense event held in Singapore, Singapore. Join industry leaders and innovators at Changi Exhibition Centre.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "TBA",
    "location": "Changi Exhibition Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 12,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.jetro.go.jp/en/database/j-messe… ",
    "tags": [
      "Aerospace & Defense",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "380",
    "name": "MRO Asia-Pacific 2025",
    "description": "MRO Asia-Pacific 2025 is a premier Aerospace & Defense event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo Convention Ctr.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "TBA",
    "location": "Singapore Expo Convention Ctr, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 6,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://mroasia.aviationweek.com ",
    "tags": [
      "Aerospace & Defense",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "381",
    "name": "Inter Airport Southeast Asia 2025",
    "description": "Inter Airport Southeast Asia 2025 is a premier Aerospace & Defense event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "TBA",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 3,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.interairport-southeastasia.com ",
    "tags": [
      "Aerospace & Defense",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "382",
    "name": "Aviation Festival Asia 2026",
    "description": "Aviation Festival Asia 2026 is a premier Aerospace & Defense event held in Singapore, Singapore. Join industry leaders and innovators at Suntec Singapore.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "TBA",
    "location": "Suntec Singapore, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://detect-inc.com/event/inter-airport",
    "tags": [
      "Aerospace & Defense",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "383",
    "name": "Langkawi International Maritime & Aerospace Exhibition (LIMA)",
    "description": "Langkawi International Maritime & Aerospace Exhibition (LIMA) is a premier Aerospace & Defense event held in Singapore, Malaysia. Join industry leaders and innovators at Mahsuri International Expo Ctr.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "TBA",
    "location": "Mahsuri International Expo Ctr, Singapore",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 450,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.youtube.com/watch?v=CjIk… ",
    "tags": [
      "Aerospace & Defense",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "384",
    "name": "Aero Malaysia 2025",
    "description": "Aero Malaysia 2025 is a premier Aerospace & Defense event held in Singapore, Malaysia. Join industry leaders and innovators at Kuala Lumpur Convention Ctr.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "TBA",
    "location": "Kuala Lumpur Convention Ctr, Singapore",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 8,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "—",
    "tags": [
      "Aerospace & Defense",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "385",
    "name": "Indo Defence 2025",
    "description": "Indo Defence 2025 is a premier Aerospace & Defense event held in Singapore, Indonesia. Join industry leaders and innovators at JIExpo Kemayoran, Jakarta.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "TBA",
    "location": "JIExpo Kemayoran, Jakarta, Singapore",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 36,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://indodefence.com ",
    "tags": [
      "Aerospace & Defense",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "386",
    "name": "Indonesian Defense & Security Expo 2026 (IDSE)",
    "description": "Indonesian Defense & Security Expo 2026 (IDSE) is a premier Aerospace & Defense event held in Singapore, Indonesia. Join industry leaders and innovators at ICE BSD, Jakarta.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "TBA",
    "location": "ICE BSD, Jakarta, Singapore",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "—",
    "tags": [
      "Aerospace & Defense",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "387",
    "name": "Defense & Security 2025",
    "description": "Defense & Security 2025 is a premier Aerospace & Defense event held in Singapore, Thailand. Join industry leaders and innovators at IMPACT Exhibition & Convention Centre.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "TBA",
    "location": "IMPACT Exhibition & Convention Centre, Singapore",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 20,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.asiandefense.com ",
    "tags": [
      "Aerospace & Defense",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "388",
    "name": "THAIFEX–Anuga Asia (Defense Tech segment)",
    "description": "THAIFEX–Anuga Asia (Defense Tech segment) is a premier Aerospace & Defense event held in Singapore, Thailand. Join industry leaders and innovators at IMPACT Exhibition Centre, Bangkok.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "TBA",
    "location": "IMPACT Exhibition Centre, Bangkok, Singapore",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 90,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://thaifex-anuga",
    "tags": [
      "Aerospace & Defense",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "389",
    "name": "Vietnam Aviation Forum 2025",
    "description": "Vietnam Aviation Forum 2025 is a premier Aerospace & Defense event held in Singapore, Vietnam. Join industry leaders and innovators at National Convention Centre.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "TBA",
    "location": "National Convention Centre, Singapore",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 735,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://vietnam.bciaerospace.com ",
    "tags": [
      "Aerospace & Defense",
      "Vietnam",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "390",
    "name": "AeroTech Vietnam 2026",
    "description": "AeroTech Vietnam 2026 is a premier Aerospace & Defense event held in Singapore, Vietnam. Join industry leaders and innovators at SECC, Ho Chi Minh City.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "TBA",
    "location": "SECC, Ho Chi Minh City, Singapore",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 8,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "—",
    "tags": [
      "Aerospace & Defense",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "391",
    "name": "FHA–Food & Beverage 2025",
    "description": "FHA–Food & Beverage 2025 is a premier Food & Beverage, Hospitality event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Apr 8, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://fhafnb.com",
    "tags": [
      "Food & Beverage, Hospitality",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "392",
    "name": "Food & Hospitality Asia (FHA 2026)",
    "description": "Food & Hospitality Asia (FHA 2026) is a premier Food & Beverage, Hospitality event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Apr 21, 2026",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://foodnhotelasia.com",
    "tags": [
      "Food & Beverage, Hospitality",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "393",
    "name": "Food & Drinks Malaysia by SIAL",
    "description": "Food & Drinks Malaysia by SIAL is a premier Food & Beverage event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Jul 1, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.fooddrinksmalaysia.com",
    "tags": [
      "Food & Beverage",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "394",
    "name": "MIHAS Halal Expo 2025",
    "description": "MIHAS Halal Expo 2025 is a premier Halal F&B event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Apr 8, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.mihas.com.my",
    "tags": [
      "Halal F&B",
      "Malaysia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "395",
    "name": "Food + Beverage Indonesia 2025",
    "description": "Food + Beverage Indonesia 2025 is a premier Ingredients, Processing event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta Int’l Expo (JIExpo).",
    category: EventCategory.B2B_TRADE,
    "date": "May 7, 2025",
    "location": "Jakarta Int’l Expo (JIExpo), Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://foodbeverageindonesia.com",
    "tags": [
      "Ingredients, Processing",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "396",
    "name": "Food + Beverage Indonesia 2026",
    "description": "Food + Beverage Indonesia 2026 is a premier Processing, Packaging event held in Jakarta, Indonesia. Join industry leaders and innovators at Nusantara Int’l Convention Exhibition.",
    category: EventCategory.B2B_TRADE,
    "date": "May 6, 2026",
    "location": "Nusantara Int’l Convention Exhibition, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://foodbeverageindonesia.com",
    "tags": [
      "Processing, Packaging",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "397",
    "name": "THAIFEX–Anuga Asia 2025",
    "description": "THAIFEX–Anuga Asia 2025 is a premier Food & Beverage, Tech event held in Bangkok, Thailand. Join industry leaders and innovators at IMPACT Exhibition Center.",
    category: EventCategory.TECH_INNOVATION,
    "date": "May 27, 2025",
    "location": "IMPACT Exhibition Center, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://thaifex-anuga.com",
    "tags": [
      "Food & Beverage, Tech",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "398",
    "name": "THAIFEX–Anuga Asia 2026",
    "description": "THAIFEX–Anuga Asia 2026 is a premier Food & Beverage, Tech event held in Bangkok, Thailand. Join industry leaders and innovators at IMPACT Exhibition Center.",
    category: EventCategory.TECH_INNOVATION,
    "date": "May 26, 2026",
    "location": "IMPACT Exhibition Center, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://thaifex-anuga.com",
    "tags": [
      "Food & Beverage, Tech",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "399",
    "name": "Vietfood & Beverage – ProPack 2025",
    "description": "Vietfood & Beverage – ProPack 2025 is a premier F&B Processing & Packaging event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Aug 7, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.showsbee.com/fairs/98367-Vietfood-Beverage-ProPack-2026.html",
    "tags": [
      "F&B Processing & Packaging",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "400",
    "name": "Food & Hotel Vietnam (FHV 2026)",
    "description": "Food & Hotel Vietnam (FHV 2026) is a premier Food, Hospitality, F&B Tech event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Mar 25, 2026",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.jetro.go.jp/en/database/j-messe/…",
    "tags": [
      "Food, Hospitality, F&B Tech",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "401",
    "name": "ASEAN Food & Beverage Expo 2025",
    "description": "ASEAN Food & Beverage Expo 2025 is a premier Packaged F&B, Retail Tech event held in Bangkok, Thailand. Join industry leaders and innovators at IMPACT Exhibition Center.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Sep 2, 2025",
    "location": "IMPACT Exhibition Center, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://10times.com/e1dh-22fs-54rz-d",
    "tags": [
      "Packaged F&B, Retail Tech",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "402",
    "name": "International Coffee & Tea Expo",
    "description": "International Coffee & Tea Expo is a premier Coffee & Tea event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.B2B_TRADE,
    "date": "Jul 9, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.cafeasia.sg",
    "tags": [
      "Coffee & Tea",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "403",
    "name": "VietFood & Beverage 2026",
    "description": "VietFood & Beverage 2026 is a premier F&B Products event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Aug 1, 2026",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "http://www.tradingchem.com/exhibitions/…",
    "tags": [
      "F&B Products",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "404",
    "name": "Singapore Food Expo 2025",
    "description": "Singapore Food Expo 2025 is a premier Food Products & Processing event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Jun 6, 2025",
    "location": "Singapore Expo, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.siww.com.sg",
    "tags": [
      "Food Products & Processing",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "405",
    "name": "Asia Agri-Tech Expo & Summit 2025",
    "description": "Asia Agri-Tech Expo & Summit 2025 is a premier Smart Farming, Agri-Tech event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Mar 10, 2025",
    "location": "Sands Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://agritechnica-asia.com",
    "tags": [
      "Smart Farming, Agri-Tech",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "406",
    "name": "AgTech Intl Expo & Seed Asia",
    "description": "AgTech Intl Expo & Seed Asia is a premier Agri-Tech, Seeds, Aquaculture event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.TECH_INNOVATION,
    "date": "May 21, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://techcollectivesea.com",
    "tags": [
      "Agri-Tech, Seeds, Aquaculture",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "407",
    "name": "Agri Malaysia 2025",
    "description": "Agri Malaysia 2025 is a premier Farm Machinery & Inputs event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "Sep 11, 2025",
    "location": "MITEC, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://tradefest.io",
    "tags": [
      "Farm Machinery & Inputs",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "408",
    "name": "Nusantara Livestock & Poultry Expo 2025",
    "description": "Nusantara Livestock & Poultry Expo 2025 is a premier Livestock, Poultry, Feed event held in Tangerang, Indonesia. Join industry leaders and innovators at ICE BSD.",
    category: EventCategory.B2B_TRADE,
    "date": "Nov 6, 2025",
    "location": "ICE BSD, Tangerang",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://globy.com",
    "tags": [
      "Livestock, Poultry, Feed",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "409",
    "name": "Fi Asia Thailand 2025",
    "description": "Fi Asia Thailand 2025 is a premier Food Ingredients & Processing event held in Bangkok, Thailand. Join industry leaders and innovators at QSNCC.",
    category: EventCategory.FOOD_BEVERAGE,
    "date": "Sep 17, 2025",
    "location": "QSNCC, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.fiasea.com",
    "tags": [
      "Food Ingredients & Processing",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "410",
    "name": "AGRITECHNICA ASIA 2025",
    "description": "AGRITECHNICA ASIA 2025 is a premier Crop Production & Smart Farming event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.AGRICULTURE,
    "date": "Mar 12, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://agritechnica-asia.com",
    "tags": [
      "Crop Production & Smart Farming",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "411",
    "name": "AGRI Vietnam 2025",
    "description": "AGRI Vietnam 2025 is a premier Farm Machinery & Inputs event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.INDUSTRIAL_MACHINERY,
    "date": "Jun 25, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://veas.com.vn",
    "tags": [
      "Farm Machinery & Inputs",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "412",
    "name": "PetExpo® 2025",
    "description": "PetExpo® 2025 is a premier Pets & Accessories event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo Halls 5B & 6.",
    category: EventCategory.JEWELRY,
    "date": "Apr 25, 2025",
    "location": "Singapore Expo Halls 5B & 6, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://petexposg.com/",
    "tags": [
      "Pets & Accessories",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "413",
    "name": "SG Pet Festival 2025",
    "description": "SG Pet Festival 2025 is a premier Pet Lifestyle event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands Expo & Convention Centre.",
    category: EventCategory.B2B_TRADE,
    "date": "Aug 1, 2025",
    "location": "Marina Bay Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.sgpetfestival.com/",
    "tags": [
      "Pet Lifestyle",
      "Singapore",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "414",
    "name": "PetExpo® Fiesta 2025",
    "description": "PetExpo® Fiesta 2025 is a premier Pet Community event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo Hall 7.",
    category: EventCategory.B2B_TRADE,
    "date": "Nov 14, 2025",
    "location": "Singapore Expo Hall 7, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://petexposg.com",
    "tags": [
      "Pet Community",
      "Singapore",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "415",
    "name": "Pet Expo Malaysia 2025",
    "description": "Pet Expo Malaysia 2025 is a premier Pets & Services event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Mid Valley Exhibition Centre.",
    category: EventCategory.ANIMALS_PETS,
    "date": "May 30, 2025",
    "location": "Mid Valley Exhibition Centre, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://expolah.com/event/pet-expo-malaysia-2025-mid-valley-kl/",
    "tags": [
      "Pets & Services",
      "Malaysia",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "416",
    "name": "IIPE Indonesia International Pet Expo 2025",
    "description": "IIPE Indonesia International Pet Expo 2025 is a premier Pet Care & Services event held in Jakarta, Indonesia. Join industry leaders and innovators at Indonesia Convention Exhibition (ICE BSD).",
    category: EventCategory.B2B_TRADE,
    "date": "Sep 5, 2025",
    "location": "Indonesia Convention Exhibition (ICE BSD), Jakarta",
    "priceRange": "IDR 150,000",
    "basePrice": 150000,
    "currency": "IDR",
    "predictedTurnout": 60,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://iipe.merebo.com",
    "tags": [
      "Pet Care & Services",
      "Indonesia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "417",
    "name": "Pet Expo Thailand 2025",
    "description": "Pet Expo Thailand 2025 is a premier Pet Products event held in Bangkok, Thailand. Join industry leaders and innovators at Queen Sirikit National Convention Center.",
    category: EventCategory.B2B_TRADE,
    "date": "May 1, 2025",
    "location": "Queen Sirikit National Convention Center, Bangkok",
    "priceRange": "฿50",
    "basePrice": 50,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.thailandexhibition.com/en/thai-trade-show-details/pet-expo-thailand-2025",
    "tags": [
      "Pet Products",
      "Thailand",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "418",
    "name": "InterPetFest Vietnam 2025",
    "description": "InterPetFest Vietnam 2025 is a premier Pet Industry event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.B2B_TRADE,
    "date": "Feb 20, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 10,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.jetro.go.jp/en/database/j-messe/tradefair/detail/138868",
    "tags": [
      "Pet Industry",
      "Vietnam",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "419",
    "name": "The Business Show Asia 2025",
    "description": "The Business Show Asia 2025 is a premier Business Services event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo & Convention Centre.",
    category: EventCategory.BUSINESS_SERVICES,
    "date": "Aug 27, 2025",
    "location": "Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.asiabusinessshow.com ",
    "tags": [
      "Business Services",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "420",
    "name": "Franchise International Malaysia (FIM 2025)",
    "description": "Franchise International Malaysia (FIM 2025) is a premier Franchising & Business Services event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Kuala Lumpur Convention Centre (KLCC).",
    category: EventCategory.FRANCHISING,
    "date": "May 8, 2025",
    "location": "Kuala Lumpur Convention Centre (KLCC), Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://myfim.my/v2/ ",
    "tags": [
      "Franchising & Business Services",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1559136555-930d72f1d300?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "421",
    "name": "International Franchise, License, & Business Concept Expo & Conference",
    "description": "International Franchise, License, & Business Concept Expo & Conference is a premier Franchising & Business Services event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta Convention Centre (JCC).",
    category: EventCategory.FRANCHISING,
    "date": "Aug 29, 2025",
    "location": "Jakarta Convention Centre (JCC), Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://10times.com/hub/business-consultancy-hub ",
    "tags": [
      "Franchising & Business Services",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1559136555-930d72f1d300?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "422",
    "name": "e-Biz Expo Bangkok 2025",
    "description": "e-Biz Expo Bangkok 2025 is a premier Online Business Solutions event held in Bangkok, Thailand. Join industry leaders and innovators at Queen Sirikit National Convention Center.",
    category: EventCategory.BUSINESS_SERVICES,
    "date": "Jul 31, 2025",
    "location": "Queen Sirikit National Convention Center, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://10times.com/e-biz-expo-bangkok-2025 ",
    "tags": [
      "Online Business Solutions",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "423",
    "name": "Trade Expo Indonesia (TEI 2025)",
    "description": "Trade Expo Indonesia (TEI 2025) is a premier General B2B Services event held in Tangerang, Indonesia. Join industry leaders and innovators at Indonesia Convention Exhibition (ICE BSD).",
    category: EventCategory.B2B_TRADE,
    "date": "Oct 15, 2025",
    "location": "Indonesia Convention Exhibition (ICE BSD), Tangerang",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.tradexpoindonesia.com ",
    "tags": [
      "General B2B Services",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "424",
    "name": "Vietnam International Trade Fair (Vietnam Expo 2025)",
    "description": "Vietnam International Trade Fair (Vietnam Expo 2025) is a premier Trade & Business Services event held in Hanoi, Vietnam. Join industry leaders and innovators at Hanoi International Exhibition Center (ICE).",
    category: EventCategory.BUSINESS_SERVICES,
    "date": "Apr 2, 2025",
    "location": "Hanoi International Exhibition Center (ICE), Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://vietnamexpo.com.vn ",
    "tags": [
      "Trade & Business Services",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "425",
    "name": "Build Eco Xpo Asia (BEX Asia) 2025",
    "description": "Build Eco Xpo Asia (BEX Asia) 2025 is a premier Green Building & Smart Tech event held in Singapore, Singapore. Join industry leaders and innovators at Sands Expo & Convention Centre.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Sep 3, 2025",
    "location": "Sands Expo & Convention Centre, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.bex-asia.com ",
    "tags": [
      "Green Building & Smart Tech",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "426",
    "name": "BEX Asia: The Premier Built Environment Expo",
    "description": "BEX Asia: The Premier Built Environment Expo is a premier Sustainable Construction event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.CONSTRUCTION,
    "date": "Sep 3, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.tradeindia.com ",
    "tags": [
      "Sustainable Construction",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "427",
    "name": "Asian Pavilion at ARCHIDEX 2025",
    "description": "Asian Pavilion at ARCHIDEX 2025 is a premier Architecture & Urban Planning event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC & KLCC.",
    category: EventCategory.B2B_TRADE,
    "date": "Jul 21, 2025",
    "location": "MITEC & KLCC, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.nabalunews.com ",
    "tags": [
      "Architecture & Urban Planning",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "428",
    "name": "INDOBUILDTECH Jakarta 2025 (Part I)",
    "description": "INDOBUILDTECH Jakarta 2025 (Part I) is a premier Building Materials & Interiors event held in Jakarta, Indonesia. Join industry leaders and innovators at ICE BSD City.",
    category: EventCategory.CONSTRUCTION,
    "date": "Jul 2, 2025",
    "location": "ICE BSD City, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://xpo.su ",
    "tags": [
      "Building Materials & Interiors",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "429",
    "name": "INDOBUILDTECH Jakarta 2025 (Part II)",
    "description": "INDOBUILDTECH Jakarta 2025 (Part II) is a premier Construction Technology event held in Jakarta, Indonesia. Join industry leaders and innovators at ICE BSD City.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Nov 6, 2025",
    "location": "ICE BSD City, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://xpo.su ",
    "tags": [
      "Construction Technology",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "430",
    "name": "Vietbuild Hanoi 2025 Phase-1",
    "description": "Vietbuild Hanoi 2025 Phase-1 is a premier Construction Materials & Design event held in Hanoi, Vietnam. Join industry leaders and innovators at National Exhibition Construction Center.",
    category: EventCategory.CONSTRUCTION,
    "date": "Mar 19, 2025",
    "location": "National Exhibition Construction Center, Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.jetro.go.jp ",
    "tags": [
      "Construction Materials & Design",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "431",
    "name": "Vietbuild Ho Chi Minh City 2025",
    "description": "Vietbuild Ho Chi Minh City 2025 is a premier Building Materials & Technology event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Jun 25, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://10times.com ",
    "tags": [
      "Building Materials & Technology",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "432",
    "name": "Architect’25 (ASEAN Architecture Expo)",
    "description": "Architect’25 (ASEAN Architecture Expo) is a premier Architecture & Innovation event held in Bangkok, Thailand. Join industry leaders and innovators at Challenger Hall, Impact Muang Thong Thani.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Apr 29, 2025",
    "location": "Challenger Hall, Impact Muang Thong Thani, Bangkok",
    "priceRange": "฿50",
    "basePrice": 50,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.designboom.com ",
    "tags": [
      "Architecture & Innovation",
      "Thailand",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "433",
    "name": "Defense & Security (Construction Tech segment)",
    "description": "Defense & Security (Construction Tech segment) is a premier Security & Construction Systems event held in Bangkok, Thailand. Join industry leaders and innovators at IMPACT Exhibition Centre.",
    category: EventCategory.TECH_INNOVATION,
    "date": "Nov 10, 2025",
    "location": "IMPACT Exhibition Centre, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.asiandefense.com [ ]",
    "tags": [
      "Security & Construction Systems",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "434",
    "name": "Indo Defence 2025",
    "description": "Indo Defence 2025 is a premier Defense Infrastructure event held in Jakarta, Indonesia. Join industry leaders and innovators at JIExpo Kemayoran.",
    category: EventCategory.AEROSPACE_DEFENSE,
    "date": "Jun 11, 2025",
    "location": "JIExpo Kemayoran, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://indodefence.com [ ]",
    "tags": [
      "Defense Infrastructure",
      "Indonesia",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "435",
    "name": "COMEX 2025",
    "description": "COMEX 2025 is a premier Consumer Electronics event held in Singapore, Singapore. Join industry leaders and innovators at Suntec Singapore Convention & Exhibition Centre.",
    category: EventCategory.CONSUMER_ELECTRONICS,
    "date": "Aug 28, 2025",
    "location": "Suntec Singapore Convention & Exhibition Centre, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.comexitshow.com.sg",
    "tags": [
      "Consumer Electronics",
      "Singapore",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "436",
    "name": "IT SHOW 2025",
    "description": "IT SHOW 2025 is a premier Consumer Electronics event held in Singapore, Singapore. Join industry leaders and innovators at Suntec Singapore Convention & Exhibition Centre.",
    category: EventCategory.CONSUMER_ELECTRONICS,
    "date": "Aug 28, 2025",
    "location": "Suntec Singapore Convention & Exhibition Centre, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.eventseye.com/fairs/it-show-22831-1.html",
    "tags": [
      "Consumer Electronics",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "437",
    "name": "Consumer Electronics Expo (CEE)",
    "description": "Consumer Electronics Expo (CEE) is a premier Consumer Electronics event held in Singapore, Singapore. Join industry leaders and innovators at Suntec Singapore Convention & Exhibition Centre.",
    category: EventCategory.CONSUMER_ELECTRONICS,
    "date": "May 22, 2025",
    "location": "Suntec Singapore Convention & Exhibition Centre, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.youtube.com/watch?v=nOwqQYR72bk",
    "tags": [
      "Consumer Electronics",
      "Singapore",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "438",
    "name": "Kuala Lumpur Consumer Electronics Show",
    "description": "Kuala Lumpur Consumer Electronics Show is a premier Consumer Electronics event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Kuala Lumpur Convention Centre.",
    category: EventCategory.CONSUMER_ELECTRONICS,
    "date": "TBA",
    "location": "Kuala Lumpur Convention Centre, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://expowindow.com/dz2/906_9_2025.html",
    "tags": [
      "Consumer Electronics",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "439",
    "name": "HomeTech SmartHome Expo",
    "description": "HomeTech SmartHome Expo is a premier Consumer Electronics event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Kuala Lumpur Convention Centre.",
    category: EventCategory.CONSUMER_ELECTRONICS,
    "date": "Jul 11, 2025",
    "location": "Kuala Lumpur Convention Centre, Kuala Lumpur",
    "priceRange": "$50",
    "basePrice": 50,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://10times.com/malaysia/home-tech-smart-home-expo",
    "tags": [
      "Consumer Electronics",
      "Malaysia",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "440",
    "name": "Indonesia Intl. Electronics & Smart Appliances Expo (IEAE)",
    "description": "Indonesia Intl. Electronics & Smart Appliances Expo (IEAE) is a premier Consumer Electronics event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta International Expo.",
    category: EventCategory.CONSUMER_ELECTRONICS,
    "date": "Aug 6, 2025",
    "location": "Jakarta International Expo, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.jetro.go.jp/en/database/j-messe/detail/153112",
    "tags": [
      "Consumer Electronics",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "441",
    "name": "CEE Bangkok 2025",
    "description": "CEE Bangkok 2025 is a premier Consumer Electronics event held in Bangkok, Thailand. Join industry leaders and innovators at BITEC.",
    category: EventCategory.CONSUMER_ELECTRONICS,
    "date": "May 22, 2025",
    "location": "BITEC, Bangkok",
    "priceRange": "฿50",
    "basePrice": 50,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.youtube.com/watch?v=nOwqQYR72bk",
    "tags": [
      "Consumer Electronics",
      "Thailand",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "442",
    "name": "NEPCON Thailand 2025",
    "description": "NEPCON Thailand 2025 is a premier Consumer Electronics event held in Bangkok, Thailand. Join industry leaders and innovators at BITEC.",
    category: EventCategory.CONSUMER_ELECTRONICS,
    "date": "Jun 18, 2025",
    "location": "BITEC, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.nepconthailand.com/en-gb/about-the-show.html",
    "tags": [
      "Consumer Electronics",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "443",
    "name": "Vietnam Intl. Electronics & Smart Devices Expo (IEAE)",
    "description": "Vietnam Intl. Electronics & Smart Devices Expo (IEAE) is a premier Consumer Electronics event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.CONSUMER_ELECTRONICS,
    "date": "May 29, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://vietnamnews.vn/economy/1717702/viet-nam-to-host-international-electronics-and-smart-devices-expo-2025.html",
    "tags": [
      "Consumer Electronics",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "444",
    "name": "Southeast Asia Fashion Week 2025",
    "description": "Southeast Asia Fashion Week 2025 is a premier Fashion event held in Singapore, Singapore. Join industry leaders and innovators at Singapore EXPO, Hall 6A.",
    category: EventCategory.FASHION,
    "date": "Jun 28, 2025",
    "location": "Singapore EXPO, Hall 6A, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.fibre2fashion.com/trade-fairs/southeast-asia-fashion-week-2025-64837 ",
    "tags": [
      "Fashion",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "445",
    "name": "BTN Indonesia Fashion Week (IFW) 2025",
    "description": "BTN Indonesia Fashion Week (IFW) 2025 is a premier Fashion event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta Convention Center.",
    category: EventCategory.FASHION,
    "date": "May 28, 2025",
    "location": "Jakarta Convention Center, Jakarta",
    "priceRange": "IDR 150,000",
    "basePrice": 150000,
    "currency": "IDR",
    "predictedTurnout": 34,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://indobuddies.com/event/btn-indonesia-fashion-week-ifw-2025-ronakultura-jakarta/ ",
    "tags": [
      "Fashion",
      "Indonesia",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "446",
    "name": "Mercedes-Benz FashionWeek Kuala Lumpur (MBFWKL)",
    "description": "Mercedes-Benz FashionWeek Kuala Lumpur (MBFWKL) is a premier Fashion event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at The Exchange TRX.",
    category: EventCategory.FASHION,
    "date": "Jun 13, 2025",
    "location": "The Exchange TRX, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.launchmetrics.com/resources/whitepapers/fashion-week-2025-data-insights-by-launchmetrics ",
    "tags": [
      "Fashion",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "447",
    "name": "KL Fashion Week 2025",
    "description": "KL Fashion Week 2025 is a premier Fashion event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Pavilion Kuala Lumpur.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": "Pavilion Kuala Lumpur, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 150,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://en.wikipedia.org/wiki/Kuala_Lumpur_Fashion_Week ",
    "tags": [
      "Fashion",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "448",
    "name": "Aquafina Vietnam International Fashion Week 2025",
    "description": "Aquafina Vietnam International Fashion Week 2025 is a premier Fashion event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at District 1 venues (multiple).",
    category: EventCategory.FASHION,
    "date": "Jun 5, 2025",
    "location": "District 1 venues (multiple), Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://en.vietnamplus.vn/vietnam-int-l-fashion-week-set-to-take-place-in-hcm-city-post319863.vnp ",
    "tags": [
      "Fashion",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "449",
    "name": "STYLE Bangkok 2025",
    "description": "STYLE Bangkok 2025 is a premier Fashion event held in Bangkok, Thailand. Join industry leaders and innovators at Queen Sirikit National Convention Center (QSNCC).",
    category: EventCategory.FASHION,
    "date": "Apr 2, 2025",
    "location": "Queen Sirikit National Convention Center (QSNCC), Bangkok",
    "priceRange": "฿50",
    "basePrice": 50,
    "currency": "THB",
    "predictedTurnout": 25,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.qsncc.com/en/whats-on/event-calendar/style-bangkok-2025/ ",
    "tags": [
      "Fashion",
      "Thailand",
      "B2B/B2C"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "450",
    "name": "Phnom Penh Designers Week 2025",
    "description": "Phnom Penh Designers Week 2025 is a premier Fashion event held in Phnom Penh, Cambodia. Join industry leaders and innovators at Rosewood Phnom Penh (Salon One).",
    category: EventCategory.FASHION,
    "date": "May 30, 2025",
    "location": "Rosewood Phnom Penh (Salon One), Phnom Penh",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.phnompenhpost.com/lifestyle/capital-more-than-ready-for-or-bi-annual-designers-week-showcasing-fragile-heritage- ",
    "tags": [
      "Fashion",
      "Cambodia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "451",
    "name": "Myanmar International Fashion Week 2025",
    "description": "Myanmar International Fashion Week 2025 is a premier Fashion event held in Yangon, Myanmar. Join industry leaders and innovators at Junction Square / Hexagon Complex.",
    category: EventCategory.FASHION,
    "date": "TBA",
    "location": "Junction Square / Hexagon Complex, Yangon",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://en.wikipedia.org/wiki/Myanmar_International_Fashion_Week ",
    "tags": [
      "Fashion",
      "Myanmar",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "452",
    "name": "Singapore International Energy Week (SIEW)",
    "description": "Singapore International Energy Week (SIEW) is a premier Energy event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands / Sands Expo.",
    category: EventCategory.ENERGY,
    "date": "Oct 27, 2025",
    "location": "Marina Bay Sands / Sands Expo, Singapore",
    "priceRange": "S$450",
    "basePrice": 450,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.siew.gov.sg ",
    "tags": [
      "Energy",
      "Singapore",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "453",
    "name": "Asia Clean Energy Forum (ACEF)",
    "description": "Asia Clean Energy Forum (ACEF) is a premier Energy event held in Manila, Philippines¹. Join industry leaders and innovators at ADB Headquarters.",
    category: EventCategory.ENERGY,
    "date": "Jun 2, 2025",
    "location": "ADB Headquarters, Manila",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://asiacleanenergyforum.adb.org ",
    "tags": [
      "Energy",
      "Philippines¹",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "454",
    "name": "ASIA Sustainable Energy Week (ASEW)",
    "description": "ASIA Sustainable Energy Week (ASEW) is a premier Energy event held in Bangkok, Thailand. Join industry leaders and innovators at Queen Sirikit National Convention Ctr.",
    category: EventCategory.ENERGY,
    "date": "Jul 2, 2025",
    "location": "Queen Sirikit National Convention Ctr, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.asew-expo.com ",
    "tags": [
      "Energy",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "455",
    "name": "Renewable Energy Asia (REA)",
    "description": "Renewable Energy Asia (REA) is a premier Energy event held in Bangkok, Thailand. Join industry leaders and innovators at Queen Sirikit National Convention Ctr.",
    category: EventCategory.ENERGY,
    "date": "Jul 2, 2025",
    "location": "Queen Sirikit National Convention Ctr, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.tradefairdates.com ",
    "tags": [
      "Energy",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "456",
    "name": "IGEM – Intl Greentech & Eco Products Expo",
    "description": "IGEM – Intl Greentech & Eco Products Expo is a premier Energy event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Kuala Lumpur Convention Centre.",
    category: EventCategory.ENERGY,
    "date": "Oct 15, 2025",
    "location": "Kuala Lumpur Convention Centre, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.nres.gov.my ",
    "tags": [
      "Energy",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "457",
    "name": "Smart Energy Indonesia",
    "description": "Smart Energy Indonesia is a premier Energy event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta Int’l Expo (JIExpo) Kemayoran.",
    category: EventCategory.ENERGY,
    "date": "Apr 23, 2025",
    "location": "Jakarta Int’l Expo (JIExpo) Kemayoran, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://smartenergy-indonesia.com ",
    "tags": [
      "Energy",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "458",
    "name": "VCAE Expo – Vietnam–China–ASEAN Energy Expo",
    "description": "VCAE Expo – Vietnam–China–ASEAN Energy Expo is a premier Energy event held in Hanoi, Vietnam. Join industry leaders and innovators at Hanoi I.C.E.",
    category: EventCategory.ENERGY,
    "date": "Apr 24, 2025",
    "location": "Hanoi I.C.E, Hanoi",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://en.baoquangnam.vn ",
    "tags": [
      "Energy",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "459",
    "name": "Indonesia Renewable Energy Expo",
    "description": "Indonesia Renewable Energy Expo is a premier Energy event held in Jakarta, Indonesia. Join industry leaders and innovators at ICE BSD.",
    category: EventCategory.ENERGY,
    "date": "Jul 1, 2025",
    "location": "ICE BSD, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "(Pending organizer site)",
    "tags": [
      "Energy",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "460",
    "name": "Malaysia Renewable Energy Summit",
    "description": "Malaysia Renewable Energy Summit is a premier Energy event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at [Various venues].",
    category: EventCategory.ENERGY,
    "date": "Mar 15, 2025",
    "location": "[Various venues], Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "(Pending official link)",
    "tags": [
      "Energy",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "461",
    "name": "Franchising & Licensing Asia (FLAsia) 2025",
    "description": "Franchising & Licensing Asia (FLAsia) 2025 is a premier Franchising event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands, Sands Expo & ConventionCtr.",
    category: EventCategory.FRANCHISING,
    "date": "Sep 18, 2025",
    "location": "Marina Bay Sands, Sands Expo & ConventionCtr, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://franchiselicenseasia.com ",
    "tags": [
      "Franchising",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1559136555-930d72f1d300?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "462",
    "name": "Franchise International Malaysia (FIM 2025)",
    "description": "Franchise International Malaysia (FIM 2025) is a premier Franchising event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at Kuala Lumpur Convention Centre (KLCC).",
    category: EventCategory.FRANCHISING,
    "date": "May 8, 2025",
    "location": "Kuala Lumpur Convention Centre (KLCC), Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://franchiseassociation.org.nz ",
    "tags": [
      "Franchising",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1559136555-930d72f1d300?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "463",
    "name": "IFRA Business Expo 2025 (IFRA)",
    "description": "IFRA Business Expo 2025 (IFRA) is a premier Franchising event held in Jakarta, Indonesia. Join industry leaders and innovators at Indonesia Convention Exhibition (ICE BSD).",
    category: EventCategory.FRANCHISING,
    "date": "Apr 25, 2025",
    "location": "Indonesia Convention Exhibition (ICE BSD), Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://ifra-indonesia.com ",
    "tags": [
      "Franchising",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1559136555-930d72f1d300?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "464",
    "name": "IFRA Business Expo 2025 – Second Edition",
    "description": "IFRA Business Expo 2025 – Second Edition is a premier Franchising event held in Jakarta, Indonesia. Join industry leaders and innovators at Jakarta Convention Centre (JCC).",
    category: EventCategory.FRANCHISING,
    "date": "Aug 29, 2025",
    "location": "Jakarta Convention Centre (JCC), Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://ifra-indonesia.com ",
    "tags": [
      "Franchising",
      "Indonesia",
      "B2B"
    ],
    "featured": true,
    "image": "https://images.unsplash.com/photo-1559136555-930d72f1d300?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "465",
    "name": "Thailand Franchise & Business Opportunities (TFBO)2025",
    "description": "Thailand Franchise & Business Opportunities (TFBO)2025 is a premier Franchising event held in Bangkok, Thailand. Join industry leaders and innovators at EH100, Impact Exhibition & Convention Centre.",
    category: EventCategory.FRANCHISING,
    "date": "Jun 4, 2025",
    "location": "EH100, Impact Exhibition & Convention Centre, Bangkok",
    "priceRange": "฿450",
    "basePrice": 450,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.thaiexhibition.or.th ",
    "tags": [
      "Franchising",
      "Thailand",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1559136555-930d72f1d300?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "466",
    "name": "Vietnam Int’l Retailtech & Franchise Show (VIETRF)",
    "description": "Vietnam Int’l Retailtech & Franchise Show (VIETRF) is a premier Franchising event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.FRANCHISING,
    "date": "Oct 30, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://vietrf.com ",
    "tags": [
      "Franchising",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1559136555-930d72f1d300?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "467",
    "name": "Malaysian International Furniture Fair (MIFF)",
    "description": "Malaysian International Furniture Fair (MIFF) is a premier Furniture & Design event held in Kuala Lumpur, Malaysia. Join industry leaders and innovators at MITEC & WTCKL.",
    category: EventCategory.FURNITURE_HOME,
    "date": "Mar 1, 2025",
    "location": "MITEC & WTCKL, Kuala Lumpur",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://designweekguide.com/miff-malaysian-international-furniture-fair-2025/ ",
    "tags": [
      "Furniture & Design",
      "Malaysia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "468",
    "name": "Indonesia International Furniture Expo (IFEX)",
    "description": "Indonesia International Furniture Expo (IFEX) is a premier Furniture & Crafts event held in Jakarta, Indonesia. Join industry leaders and innovators at JIExpo Kemayoran.",
    category: EventCategory.FURNITURE_HOME,
    "date": "Mar 6, 2025",
    "location": "JIExpo Kemayoran, Jakarta",
    "priceRange": "IDR 2,500,000",
    "basePrice": 2500000,
    "currency": "IDR",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://whatsnewindonesia.com/jakarta/feature/news/celebrating-decade-excellence-ifex-2025-returns-indonesias-premier-furniture ",
    "tags": [
      "Furniture & Crafts",
      "Indonesia",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "469",
    "name": "The Big Furniture Fair",
    "description": "The Big Furniture Fair is a premier Home & Office event held in Singapore, Singapore. Join industry leaders and innovators at Singapore Expo Hall 6B.",
    category: EventCategory.FURNITURE_HOME,
    "date": "May 3, 2025",
    "location": "Singapore Expo Hall 6B, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://eventfinda.sg/2025/the-big-furniture-fair-2025/singapore/changi ",
    "tags": [
      "Home & Office",
      "Singapore",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "470",
    "name": "FIND – Design Fair Asia",
    "description": "FIND – Design Fair Asia is a premier Furniture & Design event held in Singapore, Singapore. Join industry leaders and innovators at Marina Bay Sands.",
    category: EventCategory.FURNITURE_HOME,
    "date": "Sep 11, 2025",
    "location": "Marina Bay Sands, Singapore",
    "priceRange": "S$50",
    "basePrice": 50,
    "currency": "SGD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.designfairasia.com ",
    "tags": [
      "Furniture & Design",
      "Singapore",
      "B2B/B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "471",
    "name": "Furniture Mega Show",
    "description": "Furniture Mega Show is a premier Furniture Retail event held in Bangkok, Thailand. Join industry leaders and innovators at IMPACT Muang Thong Thani, Hall 9-12.",
    category: EventCategory.FURNITURE_HOME,
    "date": "Jan 11, 2025",
    "location": "IMPACT Muang Thong Thani, Hall 9-12, Bangkok",
    "priceRange": "฿50",
    "basePrice": 50,
    "currency": "THB",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://www.impact.co.th/index.php/visitor/event_detail/en/133695 ",
    "tags": [
      "Furniture Retail",
      "Thailand",
      "B2C"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    "id": "472",
    "name": "VIFA EXPO – Vietnam Intl. Furniture & Home Access.",
    "description": "VIFA EXPO – Vietnam Intl. Furniture & Home Access. is a premier Furniture & Home event held in Ho Chi Minh City, Vietnam. Join industry leaders and innovators at SECC.",
    category: EventCategory.FURNITURE_HOME,
    "date": "Mar 5, 2025",
    "location": "SECC, Ho Chi Minh City",
    "priceRange": "$450",
    "basePrice": 450,
    "currency": "USD",
    "predictedTurnout": 5000,
    "historicalTurnout": [
      4000,
      4500,
      4800
    ],
    "sustainabilityScore": "A",
    "website": "https://vneconomy.vn/vifa-expo-2025-a-key-gathering-for-the-furniture-industry.htm",
    "tags": [
      "Furniture & Home",
      "Vietnam",
      "B2B"
    ],
    "featured": false,
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
  }
];

export const SPONSORSHIPS_DATA: Sponsorship[] = [
  {
    id: 's1',
    eventName: 'SEA Tech Week Singapore',
    tier: 'Platinum',
    amount: 'S$50,000',
    description: 'Main stage branding, 20 VIP tickets, and private networking booth.',
  }
];

export const EVENT_CATEGORIES = Object.values(EventCategory);

export const INTEGRATIONS_DATA: Integration[] = [
  { id: 'n8n', name: 'n8n Workflow Engine', category: 'Communication', icon: 'Settings', connected: true, description: 'Master orchestrator for WhatsApp, Email, and Database flows.' },
  { id: '1', name: 'PostgreSQL Cloud', category: 'Database', icon: 'Database', connected: true, description: 'Live attendee logging for audit & PDPA compliance.' },
  { id: '3', name: 'WhatsApp Business', category: 'Support', icon: 'MessageSquare', connected: true, description: 'Automated ticket delivery and check-in updates.' },
  { id: '4', name: 'Salesforce', category: 'CRM', icon: 'Database', connected: true, description: 'Sync lead generation data for exhibitor follow-ups.' },
  { id: '6', name: 'Google Sheets', category: 'Storage', icon: 'HardDrive', connected: false, description: 'Quick export for on-ground staff usage.' },
];

export const EXHIBITORS_DATA: Exhibitor[] = [
  {
    id: 'e1',
    name: 'CloudScale SEA',
    industry: 'Cloud Computing',
    description: 'Enterprise cloud infrastructure for high-growth startups.',
    offerings: ['Cloud Hosting', 'Serverless', 'Database Management'],
    targetAudience: ['CTOs', 'Developers', 'Startups'],
    boothLocation: 'A-12',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400'
  }
];

const EN_TRANS = {
  heroTitle: "Upcoming SEA Events",
  heroSubtitle: "Discover, organize, and sponsor Southeast Asia's leading trade shows and conferences.",
  searchPlaceholder: "Find events (e.g., 'Fintech in Jakarta')...",
  navDirectory: "Directory",
  navSponsorships: "Sponsorships",
  navDashboard: "Dashboard",
  navMatchmaking: "AI Matchmaking",
  login: "Login",
  logout: "Logout",
  createEvent: "Create Event",
  aiSearch: "AI Search",
  find: "Find",
  upcoming: "Upcoming",
  seaEvents: "SEA Events",
  industries: "Industries",
  filterCategories: "Filter categories...",
  featuredEvents: "Featured Events",
  mapView: "Map View",
  listView: "List View",
  register: "Register",
  from: "From",
  attendees: "Attendees",
  ecoScore: "Eco Score",
  featured: "Featured",
  allEvents: "All Events",
  tech: "Technology & AI",
  finance: "Fintech & Crypto",
  lifestyle: "Lifestyle & Culture",
  b2b: "B2B Trade Show",
  startup: "Startup & VC",
  overview: "Overview",
  aiAnalytics: "AI Analytics",
  registrations: "Registrations",
  automations: "Automations",
  roiReports: "Post-Event ROI",
  marketing: "AI Marketing",
  integrations: "Integrations",
  totalRegs: "Total Regs",
  checkedIn: "Checked-In",
  revenue: "Revenue",
  staffCheckin: "Staff Check-in",
  walkinScan: "Walk-in Scan",
  myPortal: "My Portal",
  authenticating: "Authenticating...",
  footerPrivacy: "Privacy",
  footerTerms: "Terms",
  footerSubmit: "Submit Event",
  loginTitle: "Login to Nusantara",
  loginSubtitle: "Simulate a login to test role-based access.",
  loginOrganizers: "Organizers",
  loginAttendees: "Attendees",
  loginOrgDesc: "Manage events & sponsorships",
  loginAttDesc: "Buy tickets & AI Matchmaking",
  matchmakingTitle: "AI Smart Matchmaking",
  matchmakingSubtitle: "Our AI analyzes your business goals to curate the perfect list of exhibitors.",
  matchmakingProfile: "Your Match Profile",
  matchmakingFind: "Find My Matches",
  matchmakingJob: "Job Title",
  matchmakingIndustry: "Industry",
  matchmakingGoals: "What are you looking for?",
  matchmakingNoMatches: "No matches generated yet",
  matchmakingReason: "AI Smart Tip",
  integrationsTitle: "Integrations Hub",
  integrationsSubtitle: "Connect your workspace tools to automate event logistics.",
  autoTagline: "Automated Management: Scan any event flyer QR to register instantly",
  regHubTitle: "Nusantara Enrollment Hub",
  fullNameLabel: "Full Badge Name",
  emailLabel: "Digital Correspondence",
  nextSecureAuth: "Next: Secure WhatsApp Auth",
  identitySync: "Identity Sync",
  waGateway: "Regional WhatsApp API Gateway",
  mobileLabel: "Mobile Number (Badge Access)",
  consentLogistics: "Consent to Automated Logistics",
  consentDesc: "Receive QR badges, AI networking match notifications, and official venue alerts via WhatsApp.",
  requestPin: "Request Authorization PIN",
  enterPin: "Enter Authentication PIN",
  verifyPulse: "Verification Pulse",
  syncAccount: "Sync Account",
  accessTier: "Access Tier",
  standardPass: "Standard Pass",
  vipExecutive: "VIP Executive",
  configAiProfile: "Configure AI Profile",
  businessLogic: "Business Logic",
  profRole: "Professional Role",
  netGoal: "Network Goal (For AI Briefing)",
  finalizeSettle: "Finalize Settle",
  settleCheckout: "Settle Checkout",
  prefLocalCurr: "Prefer Local Currency?",
  tierAccess: "Tier Access",
  regNodeFee: "Regional Node Fee",
  totalAuth: "Total Authorized",
  localChannels: "Localized Settlement Channels",
  authSettlement: "Complete Settlement",
  verifySettle: "Verify Settle",
  regAuth: "Registration Authenticated",
  enterPortal: "Enter Portal",
  officialAccount: "Official Account",
  orchestrating: "Orchestrating Experience Flow...",
  syncedVia: "Synced via",
  awaitingPulse: "Awaiting Settle Pulse...",
  paynowDesc: "Direct SGD via SGQR",
  grabpayDesc: "Grab wallet settlement",
  qrisDesc: "GoPay, OVO, Dana, LinkAja",
  vaDesc: "Bank Virtual Account",
  promptpayDesc: "Thai QR Bank Transfer",
  truemoneyDesc: "TrueMoney Wallet",
  navIdentity: "Identity",
  navAuth: "Auth",
  navTier: "Tier",
  navReview: "Review",
  navSettle: "Settle",
  autoMgmtCore: "Automated Management Core",
  autoRegTerminal: "Automated Registration & Attendee Terminal",
  autoRegDesc: "Deploy instant check-in nodes across your venue. Our AI-driven handshake protocol ensures zero-friction arrival and instant WhatsApp badge delivery.",
  opticalHandshake: "Optical Handshake",
  startQuickCheckin: "Start Quick Check-in",
  pulseLogs: "Real-time Pulse Logs",
  listeningSignals: "Listening for Node signals...",
  autoSettings: "Automation Settings",
  autoHandshake: "Auto-Handshake",
  instantWA: "Instant WhatsApp",
  aiSmoothing: "Pro Feature: AI Queue Smoothing",
  termVelocity: "Terminal Velocity",
  avgHandshake: "Avg Handshake Speed",
  optNodeActive: "Optimization Node Active"
};

export const TRANSLATIONS: Record<string, any> = {
  en: EN_TRANS,
  id: {
    ...EN_TRANS,
    heroTitle: "Acara SEA Mendatang",
    heroSubtitle: "Temukan, atur, dan sponsori pameran dagang dan konferensi terkemuka di Asia Tenggara.",
    searchPlaceholder: "Cari acara (cth. 'Fintech di Jakarta')...",
    navDirectory: "Direktori",
    navSponsorships: "Sponsor",
    navDashboard: "Dasbor",
    navMatchmaking: "AI Matchmaking",
    login: "Masuk",
    logout: "Keluar",
    createEvent: "Buat Acara",
    aiSearch: "Cari AI",
    find: "Cari",
    register: "Daftar",
    filterCategories: "Filter kategori...",
    featuredEvents: "Acara Unggulan",
    industries: "Industri",
    attendees: "Peserta",
    overview: "Ikhtisar",
    aiAnalytics: "Analitik AI",
    registrations: "Registrasi",
    automations: "Otomasi",
    integrations: "Integrasi",
    regHubTitle: "Pusat Pendaftaran Nusantara",
    fullNameLabel: "Nama Lengkap (Sesuai ID)",
    emailLabel: "Korespondensi Digital",
    nextSecureAuth: "Berikutnya: Autentikasi WhatsApp",
    identitySync: "Sinkronisasi Identitas",
    waGateway: "Gerbang API WhatsApp Regional",
    mobileLabel: "Nomor Ponsel (Akses Badge)",
    consentLogistics: "Persetujuan Logistik Otomatis",
    consentDesc: "Terima badge QR, notifikasi pencocokan AI, dan peringatan lokasi via WhatsApp.",
    requestPin: "Minta PIN Otorisasi",
    syncAccount: "Sinkronkan Akun",
    accessTier: "Tingkat Akses",
    finalizeSettle: "Selesaikan Pembayaran",
    settleCheckout: "Checkout Pembayaran",
    autoRegTerminal: "Terminal Registrasi & Peserta Otomatis",
  },
  th: {
    ...EN_TRANS,
    heroTitle: "งานอีเวนต์ SEA ที่กำลังจะมาถึง",
    heroSubtitle: "ค้นพบ จัดระเบียบ และสนับสนุนงานแสดงสินค้าและการประชุมชั้นนำของเอเชียตะวันออกเฉียงใต้",
    searchPlaceholder: "ค้นหางาน (เช่น 'Fintech ในจาการ์ตา')...",
    navDirectory: "ไดเรกทอรี",
    navSponsorships: "การสนับสนุน",
    navDashboard: "แดชบอร์ด",
    navMatchmaking: "AI Matchmaking",
    login: "เข้าสู่ระบบ",
    logout: "ออกจากระบบ",
    aiSearch: "ค้นหา AI",
    find: "ค้นหา",
    register: "ลงทะเบียน",
    filterCategories: "กรองหมวดหมู่...",
    featuredEvents: "งานแนะนำ",
    industries: "อุตสาหกรรม",
    attendees: "ผู้เข้าร่วม",
    overview: "ภาพรวม",
    aiAnalytics: "การวิเคราะห์ AI",
    registrations: "การลงทะเบียน",
    automations: "ระบบอัตโนมัติ",
    regHubTitle: "ศูนย์รับลงทะเบียน Nusantara",
    fullNameLabel: "ชื่อ-นามสกุล (ตามบัตร)",
    emailLabel: "ข้อมูลติดต่อดิจิทัล",
    nextSecureAuth: "ถัดไป: ตรวจสอบสิทธิ์ WhatsApp",
    identitySync: "ซิงค์ข้อมูลประจำตัว",
    waGateway: "เกตเวย์ WhatsApp API ระดับภูมิภาค",
    mobileLabel: "หมายเลขโทรศัพท์ (สำหรับบัตรเข้างาน)",
    consentLogistics: "ยินยอมรับการแจ้งเตือนอัตโนมัติ",
    requestPin: "ขอรหัส PIN ยืนยัน",
    syncAccount: "ซิงค์บัญชี",
    finalizeSettle: "สรุปการชำระเงิน",
    settleCheckout: "ชำระเงิน",
    autoRegTerminal: "เทอร์มินัลการลงทะเบียนและผู้เข้าร่วมอัตโนมัติ",
  },
  zh: {
    ...EN_TRANS,
    heroTitle: "即將到來的東南亞活動",
    heroSubtitle: "發現、組織和贊助東南亞領先的貿易展覽和會議。",
    searchPlaceholder: "搜尋活動（例如“雅加達金融科技”）...",
    navDirectory: "目錄",
    navSponsorships: "贊助",
    navDashboard: "儀表板",
    navMatchmaking: "AI 配對",
    login: "登錄",
    logout: "登出",
    aiSearch: "AI 搜尋",
    find: "搜尋",
    register: "註冊",
    filterCategories: "篩選類別...",
    featuredEvents: "精選活動",
    industries: "產業",
    attendees: "參加者",
    overview: "概覽",
    aiAnalytics: "AI 分析",
    registrations: "註冊管理",
    automations: "自動化",
    regHubTitle: "Nusantara 註冊中心",
    fullNameLabel: "證件全名",
    emailLabel: "通訊電子郵件",
    nextSecureAuth: "下一步：WhatsApp 安全認證",
    identitySync: "身份同步",
    waGateway: "東南亞區域 WhatsApp API 網關",
    mobileLabel: "手機號碼（用於入場證）",
    consentLogistics: "同意自動化物流通知",
    requestPin: "獲取授權 PIN 碼",
    syncAccount: "同步賬戶",
    finalizeSettle: "完成結算",
    settleCheckout: "結賬付款",
    autoRegTerminal: "自動註冊與參會者終端",
  },
  vi: {
    ...EN_TRANS,
    heroTitle: "Sự kiện SEA sắp tới",
    navDirectory: "Danh mục",
    navSponsorships: "Tài trợ",
    navDashboard: "Bảng điều khiển",
    register: "Đăng ký",
    filterCategories: "Lọc danh mục...",
    featuredEvents: "Sự kiện nổi bật",
    industries: "Ngành nghề",
    attendees: "Người tham dự",
    overview: "Tổng quan",
    registrations: "Đăng ký",
    automations: "Tự động hóa",
    regHubTitle: "Trung tâm Đăng ký Nusantara",
    fullNameLabel: "Họ tên đầy đủ (trên thẻ)",
    emailLabel: "Thư từ kỹ thuật số",
    nextSecureAuth: "Tiếp theo: Xác thực WhatsApp Bảo mật",
    identitySync: "Đồng bộ danh tính",
    mobileLabel: "Số điện thoại (Truy cập thẻ)",
    consentLogistics: "Đồng ý nhận thông báo hậu cần",
    requestPin: "Yêu cầu mã PIN ủy quyền",
    syncAccount: "Đồng bộ tài khoản",
    finalizeSettle: "Hoàn tất thanh toán",
    settleCheckout: "Thanh toán",
    autoRegTerminal: "Thiết bị Đăng ký & Người tham dự Tự động",
  },
  ms: {
    ...EN_TRANS,
    heroTitle: "Acara SEA Akan Datang",
    navDirectory: "Direktori",
    navSponsorships: "Penajaan",
    navDashboard: "Papan Pemuka",
    register: "Daftar",
    filterCategories: "Tapis kategori...",
    featuredEvents: "Acara Pilihan",
    industries: "Industri",
    attendees: "Peserta",
    overview: "Gambaran Keseluruhan",
    registrations: "Pendaftaran",
    automations: "Automatik",
    regHubTitle: "Pusat Pendaftaran Nusantara",
    fullNameLabel: "Nama Penuh (Untuk Pas)",
    emailLabel: "Korespondensi Digital",
    nextSecureAuth: "Seterusnya: Pengesahan WhatsApp Selamat",
    identitySync: "Sinkronisasi Identiti",
    mobileLabel: "Nombor Mudah Alih (Akses Pas)",
    consentLogistics: "Persetujuan Logistik Automatik",
    requestPin: "Minta PIN Kebenaran",
    syncAccount: "Sinkronkan Akaun",
    finalizeSettle: "Selesaikan Pembayaran",
    settleCheckout: "Checkout Pembayaran",
    autoRegTerminal: "Terminal Pendaftaran & Peserta Automatik",
  },
  tl: {
    ...EN_TRANS,
    heroTitle: "Mga Darating na Kaganapan sa SEA",
    navDirectory: "Direktoryo",
    navSponsorships: "Sponsorship",
    navDashboard: "Dashboard",
    register: "Magrehistro",
    filterCategories: "I-filter ang kategorya...",
    featuredEvents: "Mga Tampok na Kaganapan",
    industries: "Mga Industriya",
    attendees: "Mga Dadalo",
    overview: "Pangkalahatang-ideya",
    registrations: "Mga Rehistrasyon",
    automations: "Automations",
    regHubTitle: "Nusantara Enrollment Hub",
    fullNameLabel: "Buong Pangalan sa Badge",
    emailLabel: "Digital na Pakikipag-ugnayan",
    nextSecureAuth: "Susunod: Secure na WhatsApp Auth",
    identitySync: "Identity Sync",
    mobileLabel: "Numero ng Mobile (Badge Access)",
    consentLogistics: "Pahintulot sa Automated Logistics",
    requestPin: "Humingi ng Authorization PIN",
    syncAccount: "I-sync ang Account",
    finalizeSettle: "I-finalize ang Pagbabayad",
    settleCheckout: "Settle Checkout",
    autoRegTerminal: "Automated Registration at Attendee Terminal",
  },
  km: {
    ...EN_TRANS,
    heroTitle: "ព្រឹត្តិការណ៍ SEA នាពេលខាងមុខ",
    navDirectory: "បញ្ជីឈ្មោះ",
    navSponsorships: "ការឧបត្ថម្ភ",
    navDashboard: "ផ្ទាំងគ្រប់គ្រង",
    register: "ចុះឈ្មោះ",
    filterCategories: "ត្រងប្រភេទ...",
    featuredEvents: "ព្រឹត្តិការណ៍លេចធ្លោ",
    industries: "ឧស្សាហកម្ម",
    attendees: "អ្នកចូលរួម",
    overview: "ទិដ្ឋភាពទូទៅ",
    registrations: "ការចុះឈ្មោះ",
    automations: "ស្វ័យប្រវត្តិកម្ម",
    regHubTitle: "មជ្ឈមណ្ឌលចុះឈ្មោះ Nusantara",
    fullNameLabel: "ឈ្មោះពេញលើប័ណ្ណ",
    emailLabel: "ការឆ្លើយឆ្លងឌីជីថល",
    nextSecureAuth: "បន្ទាប់៖ ការផ្ទៀងផ្ទាត់ WhatsApp",
    identitySync: "ការធ្វើសមកាលកម្មអត្តសញ្ញាណ",
    mobileLabel: "លេខទូរស័ព្ទ (សម្រាប់ការចូលប្រើប័ណ្ណ)",
    consentLogistics: "ការយល់ព្រមចំពោះភស្តុភារស្វ័យប្រវត្តិ",
    requestPin: "ស្នើសុំលេខកូដ PIN",
    syncAccount: "ធ្វើសមកាលកម្មគណនី",
    finalizeSettle: "បញ្ចប់ការទូទាត់",
    settleCheckout: "ការទូទាត់ប្រាក់",
    autoRegTerminal: "ស្ថានីយចុះឈ្មោះស្វ័យប្រវត្តិ និងអ្នកចូលរួម",
  },
  my: {
    ...EN_TRANS,
    heroTitle: "လာမည့် SEA ပွဲများ",
    navDirectory: "လမ်းညွှန်",
    navSponsorships: "စပွန်ဆာပေးမှုများ",
    navDashboard: "ဒက်ရှ်ဘုတ်",
    register: "စာရင်းသွင်းရန်",
    filterCategories: "အမျိုးအစားများစစ်ထုတ်ရန်...",
    featuredEvents: "အထူးပွဲများ",
    industries: "စက်မှုလက်မှုလုပ်ငန်းများ",
    attendees: "တက်ရောက်သူများ",
    overview: "ခြုံငုံသုံးသပ်ချက်",
    registrations: "စာရင်းပေးသွင်းမှုများ",
    automations: "အလိုအလျောက်စနစ်များ",
    regHubTitle: "Nusantara စာရင်းသွင်းမှုဗဟို",
    fullNameLabel: "ဘတ်ဂျ်ပေါ်ရှိ အမည်အပြည့်အစုံ",
    emailLabel: "ဒီဂျစ်တယ် ဆက်သွယ်မှု",
    nextSecureAuth: "နောက်တစ်ခု- WhatsApp အတည်ပြုချက်",
    identitySync: "အထောက်အထား ထပ်တူပြုခြင်း",
    mobileLabel: "မိုဘိုင်းလ်ဖုန်းနံပါတ်",
    consentLogistics: "အလိုအလျောက် ထောက်ပံ့ပို့ဆောင်ရေး သဘောတူညီချက်",
    requestPin: "PIN ကုဒ် တောင်းဆိုရန်",
    syncAccount: "အကောင့် ထပ်တူပြုရန်",
    finalizeSettle: "ငွေပေးချေမှုကို အတည်ပြုရန်",
    settleCheckout: "ငွေပေးချေမှု ပြီးမြောက်ရန်",
    autoRegTerminal: "အလိုအလျောက် စာရင်းသွင်းခြင်းနှင့် တက်ရောက်သူ ဂိတ်",
  },
  lo: {
    ...EN_TRANS,
    heroTitle: "ກິດຈະກຳ SEA ທີ່ຈະມາເຖິງ",
    navDirectory: "ລາຍຊື່",
    navSponsorships: "ການອຸປະຖຳ",
    navDashboard: "ແຜງຄວບຄຸມ",
    register: "ລົງທະບຽນ",
    filterCategories: "ກັ່ນຕອງປະເພດ...",
    featuredEvents: "ກິດຈະກຳພິເສດ",
    industries: "ອຸດສາຫະກຳ",
    attendees: "ຜູ້ເຂົ້າຮ່ວມ",
    overview: "ພາບລວມ",
    registrations: "ການລົງທະບຽນ",
    automations: "ລະບົບອັດຕະໂນມັດ",
    regHubTitle: "ສູນລົງທະບຽນ Nusantara",
    fullNameLabel: "ຊື່ເຕັມໃນບັດ",
    emailLabel: "ການຕິດຕໍ່ດິຈິຕອນ",
    nextSecureAuth: "ຕໍ່ໄປ: ການຢືນຢັນ WhatsApp",
    identitySync: "ການເຊື່ອມໂຍງຕົວຕົນ",
    mobileLabel: "ເບີໂທລະສັບ (ສຳລັບເຂົ້າງານ)",
    consentLogistics: "ການຍອມຮັບການຈັດການອັດຕະໂນມັດ",
    requestPin: "ຂໍລະຫັດ PIN",
    syncAccount: "ເຊື່ອມໂຍງບັນຊີ",
    finalizeSettle: "ສະຫຼຸບການຊຳລະເງິນ",
    settleCheckout: "ຊຳລະເງິນ",
    autoRegTerminal: "ສະຖານີລົງທະບຽນອັດຕະໂນມັດ ແລະ ຜູ້ເຂົ້າຮ່ວມ",
  }
};

// Ensure all new keys fallback to English if not defined for each language
const ALL_KEYS = Object.keys(TRANSLATIONS.en);
Object.keys(TRANSLATIONS).forEach(lang => {
  if (lang === 'en') return;
  ALL_KEYS.forEach(key => {
    if (!TRANSLATIONS[lang][key]) {
      TRANSLATIONS[lang][key] = TRANSLATIONS.en[key];
    }
  });
});
