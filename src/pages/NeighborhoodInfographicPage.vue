<template>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>🏘️ My Neighborhood</h1>
      <div class="subtitle">{{ neighborhood }} - {{ city }}</div>
    </div>

    <!-- Personal Information -->
    <div class="personal-info">
      <h3>📋 Student Information</h3>
      <div class="info-grid">
        <div class="info-item">
          <div class="info-icon">👤</div>
          <span><strong>Name:</strong> {{ studentName }}</span>
        </div>
        <div class="info-item">
          <div class="info-icon">🆔</div>
          <span><strong>ID:</strong> {{ studentId }}</span>
        </div>
        <div class="info-item">
          <div class="info-icon">📚</div>
          <span><strong>Program:</strong> {{ program }}</span>
        </div>
        <div class="info-item">
          <div class="info-icon">🏫</div>
          <span><strong>Code:</strong> {{ programCode }}</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Introduction -->
      <div class="intro-message">
        <h2>🌟 Welcome to My Neighborhood!</h2>
        <p>{{ introMessage }}</p>
      </div>

      <!-- Interactive Neighborhood Map -->
      <div class="neighborhood-map">
        <div 
          v-for="(item, index) in mapItems" 
          :key="index"
          :class="['map-item', item.type]"
          @click="selectLocation(item)"
        >
          <div class="map-icon">{{ item.icon }}</div>
          <div class="map-label">{{ item.label }}</div>
        </div>
      </div>

      <!-- Location Details -->
      <div class="locations-grid">
        <div 
          v-for="location in locationDetails" 
          :key="location.id"
          :class="['location-card', location.position]"
        >
          <h4>
            <div class="location-icon" :style="{ background: location.color }">
              {{ location.icon }}
            </div>
            {{ location.title }}
          </h4>
          <p v-html="location.description"></p>
        </div>
      </div>

      <!-- Description -->
      <div class="description">
        <h3>📝 About {{ neighborhood }}</h3>
        <p>{{ fullDescription }}</p>
        <div class="word-count">Word count: {{ wordCount }} words ✅</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NeighborhoodInfographicPage',
  data() {
    return {
      studentName: 'Howard Medina Pineda',
      studentId: 'CC 1150942037',
      program: 'English Does Work - Level 2',
      programCode: '51240088',
      neighborhood: 'Barrio Oriente',
      city: 'Buenaventura, Colombia',
      introMessage: "Hi! I'm Howard and I live in Barrio Oriente, a vibrant neighborhood in Buenaventura. Let me show you the amazing places around my home using prepositions of place in English. My neighborhood is full of life with schools, stores, and friendly neighbors!",
      fullDescription: "I live in Barrio Oriente, a beautiful neighborhood in Buenaventura. My house is located in the center of many interesting places. In front of my house, there are my neighbors' homes where friendly families live. Behind my house, there is an empty lot where children play. Next to my house, on both sides, there are more neighbors who make our community special. Near my home, I can find everything I need: six stores for daily shopping, two schools for education, one clothing store for fashion, a small booth for quick purchases, and a restaurant for delicious meals. Around my neighborhood, several streets connect all these places, making it easy to walk everywhere. This location makes my daily life very convenient and enjoyable.",
      mapItems: [
        // Row 1
        { icon: '🏫', label: 'School 1', type: 'school' },
        { icon: '🏪', label: 'Store', type: 'store' },
        { icon: '🛣️', label: 'Street', type: 'street' },
        { icon: '🏪', label: 'Store', type: 'store' },
        { icon: '🏫', label: 'School 2', type: 'school' },
        
        // Row 2
        { icon: '🏪', label: 'Store', type: 'store' },
        { icon: '🏠', label: 'Neighbor', type: 'neighbor' },
        { icon: '🛣️', label: 'Street', type: 'street' },
        { icon: '🏠', label: 'Neighbor', type: 'neighbor' },
        { icon: '👕', label: 'Clothing', type: 'clothing-store' },
        
        // Row 3
        { icon: '🛣️', label: 'Street', type: 'street' },
        { icon: '🏠', label: 'Neighbor', type: 'neighbor' },
        { icon: '🏡', label: 'MY HOUSE', type: 'my-house' },
        { icon: '🏠', label: 'Neighbor', type: 'neighbor' },
        { icon: '🍽️', label: 'Restaurant', type: 'restaurant' },
        
        // Row 4
        { icon: '🏪', label: 'Store', type: 'store' },
        { icon: '🛣️', label: 'Street', type: 'street' },
        { icon: '🌱', label: 'Empty Lot', type: 'empty-lot' },
        { icon: '🛣️', label: 'Street', type: 'street' },
        { icon: '🏪', label: 'Booth', type: 'booth' },
        
        // Row 5
        { icon: '🏪', label: 'Store', type: 'store' },
        { icon: '🛣️', label: 'Street', type: 'street' },
        { icon: '🛣️', label: 'Street', type: 'street' },
        { icon: '🛣️', label: 'Street', type: 'street' },
        { icon: '🏪', label: 'Store', type: 'store' }
      ],
      locationDetails: [
        {
          id: 1,
          position: 'front',
          title: 'In Front Of My House',
          icon: '👥',
          color: '#e74c3c',
          description: 'There are my neighbors\' houses <strong>in front of</strong> my home. They are very friendly people who always greet me in the morning.'
        },
        {
          id: 2,
          position: 'behind',
          title: 'Behind My House',
          icon: '🌱',
          color: '#f39c12',
          description: 'There is an empty lot <strong>behind</strong> my house. It\'s a quiet space where children sometimes play soccer in the afternoons.'
        },
        {
          id: 3,
          position: 'next',
          title: 'Next To My House',
          icon: '🏠',
          color: '#2ecc71',
          description: '<strong>Next to</strong> my house, on both sides, there are neighbors\' houses. We live very close to each other and form a nice community.'
        },
        {
          id: 4,
          position: 'near',
          title: 'Near My House',
          icon: '🏪',
          color: '#3498db',
          description: '<strong>Near</strong> my home, there are six different stores, two schools, one clothing store, a small booth, and a restaurant where we can eat delicious local food.'
        }
      ]
    }
  },
  computed: {
    wordCount() {
      return this.fullDescription.split(' ').length;
    }
  },
  methods: {
    selectLocation(item) {
      console.log('Selected location:', item.label);
    }
  },
  mounted() {
    console.log('NeighborhoodInfographicPage component mounted successfully!');
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  overflow: hidden;
  font-family: 'Arial', sans-serif;
}

.header {
  background: linear-gradient(45deg, #2193b0, #6dd5ed);
  color: white;
  padding: 30px;
  text-align: center;
}

.header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.header .subtitle {
  font-size: 1.2em;
  opacity: 0.9;
}

.personal-info {
  background: #f8f9fa;
  padding: 20px 30px;
  border-left: 5px solid #2193b0;
}

.personal-info h3 {
  color: #2193b0;
  margin-bottom: 10px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-icon {
  width: 20px;
  height: 20px;
  background: #2193b0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
}

.main-content {
  padding: 40px 30px;
}

.intro-message {
  text-align: center;
  margin-bottom: 40px;
  padding: 25px;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border-radius: 15px;
}

.intro-message h2 {
  color: #d35400;
  margin-bottom: 15px;
}

.neighborhood-map {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
  max-width: 600px;
  margin: 0 auto 40px;
  height: 400px;
}

.map-item {
  background: #ecf0f1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.map-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.my-house {
  background: linear-gradient(135deg, #ff6b6b, #ee5a24) !important;
  color: white;
  border: 3px solid #d63031;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.school { background: linear-gradient(135deg, #74b9ff, #0984e3); color: white; }
.store { background: linear-gradient(135deg, #55efc4, #00b894); color: white; }
.restaurant { background: linear-gradient(135deg, #fdcb6e, #e17055); color: white; }
.neighbor { background: linear-gradient(135deg, #a29bfe, #6c5ce7); color: white; }
.empty-lot { background: linear-gradient(135deg, #ddd, #bbb); }
.street { background: linear-gradient(135deg, #636e72, #2d3436); color: white; }
.clothing-store { background: linear-gradient(135deg, #fd79a8, #e84393); color: white; }
.booth { background: linear-gradient(135deg, #fdcb6e, #f39c12); color: white; }

.map-icon {
  font-size: 24px;
  margin-bottom: 5px;
}

.map-label {
  font-size: 10px;
  text-align: center;
  font-weight: bold;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
}

.location-card {
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-left: 5px solid;
  transition: transform 0.3s ease;
}

.location-card:hover {
  transform: translateX(10px);
}

.location-card.front { border-left-color: #e74c3c; }
.location-card.behind { border-left-color: #f39c12; }
.location-card.next { border-left-color: #2ecc71; }
.location-card.near { border-left-color: #3498db; }

.location-card h4 {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.location-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
}

.description {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 15px;
  margin-top: 40px;
  line-height: 1.6;
}

.description h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  text-align: center;
}

.word-count {
  text-align: center;
  margin-top: 15px;
  font-style: italic;
  color: #7f8c8d;
}

@media (max-width: 768px) {
  .neighborhood-map {
    grid-template-columns: repeat(3, 1fr);
    height: 300px;
  }
  
  .header h1 {
    font-size: 2em;
  }
  
  .locations-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid, .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Stats Section */
.stats-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  margin-top: 40px;
}

.stats-section h3 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.5em;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-icon {
  font-size: 2em;
  margin-bottom: 10px;
}

.stat-number {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9em;
  opacity: 0.9;
}

/* Soccer Section */
.soccer-section {
  background: linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%);
  padding: 30px;
  border-radius: 15px;
  margin-top: 40px;
  color: #2c5530;
}

.soccer-section h3 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.5em;
  color: #1e3a20;
}

.soccer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
}

.soccer-field {
  display: flex;
  justify-content: center;
  align-items: center;
}

.field-grass {
  width: 300px;
  height: 200px;
  background: linear-gradient(135deg, #2e8b57, #228b22);
  border-radius: 10px;
  position: relative;
  border: 3px solid #ffffff;
  overflow: hidden;
}

.center-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  border: 2px solid white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.center-line {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background: white;
  transform: translateX(-50%);
}

.goal {
  position: absolute;
  width: 20px;
  height: 60px;
  background: rgba(255, 255, 255, 0.8);
  top: 50%;
  transform: translateY(-50%);
  border-radius: 3px;
}

.goal-left {
  left: -10px;
}

.goal-right {
  right: -10px;
}

.penalty-area {
  position: absolute;
  width: 60px;
  height: 100px;
  border: 2px solid white;
  top: 50%;
  transform: translateY(-50%);
}

.penalty-left {
  left: 0;
}

.penalty-right {
  right: 0;
}

.soccer-ball {
  position: absolute;
  top: 45%;
  left: 55%;
  font-size: 1.5em;
  z-index: 10;
}

.soccer-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.soccer-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
  border-radius: 10px;
  border-left: 4px solid #2e8b57;
}

.soccer-card h4 {
  margin-bottom: 8px;
  color: #1e3a20;
}

.soccer-card p {
  font-size: 0.9em;
  line-height: 1.4;
}

/* Benefits Section */
.benefits-section {
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
  padding: 30px;
  border-radius: 15px;
  margin-top: 40px;
  color: #8b1538;
}

.benefits-section h3 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.5em;
  color: #6b1028;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #ff6b9d;
}

.benefit-icon {
  font-size: 2em;
  margin-bottom: 10px;
}

.benefit-card h4 {
  margin-bottom: 10px;
  color: #6b1028;
}

.benefit-card p {
  font-size: 0.9em;
  line-height: 1.4;
  color: #8b1538;
}

@media (max-width: 768px) {
  .soccer-content {
    grid-template-columns: 1fr;
  }
  
  .field-grass {
    width: 250px;
    height: 160px;
  }
}
</style>