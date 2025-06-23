<template>
  <div class="bookingTable b-orange p-4">
    <div class="is-flex is-justify-content-space-between g-4 mb-5">
      <button
        class="title is-size-5 p-3 day m-0"
        v-for="(day, key) in days"
        :class="key == booking.day ? 'c-noir b-beige' : 'c-beige'"
        :key="key"
        @click="useDay(key)"
      >{{ day }}</button>
    </div>
    <div class="columns is-multiline">
      <div
        class="column is-4 c-noir session" 
        v-for="(session, key) in filteredSessions"
        :key="key"
        @click="select(key)"
      >
        <div
          class="box has-text-centered"
          :class="session.filled || session.selected ? `block-pointer b-beige ${session.selected ? 'b-marron c-beige' : '' }`: 'c-noir'"
        >
          <p class="inherit-color title is-5 mb-1">{{ session.hour }}</p>
          <p class="inherit-color title is-5 mb-1">{{ session.level }}</p>
          <p class="inherit-color title is-5 mb-1">Session {{ session.type }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="c-noir has-text-centered my-4">
    <p>Informations : Session solo = Inscription seul, expérience en groupe avec des inconnus. Session groupe = Inscription en groupe, ami.e.s, famille etc...
    </p>
  </div>
</template>

<script setup lang="js">
  import { ref, computed } from 'vue'

  const days = ref([
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ])

  const booking = ref({ day: 0 })

  const selection = ref(-1);

  const sessions = ref([
    { day: 0, selected: false, hour: '08h00', type: 'solo',   level: 'debutant', filled: false },
    { day: 0, selected: false, hour: '09h00', type: 'groupe', level: 'amateur',  filled: false },
    { day: 0, selected: false, hour: '10h00', type: 'solo',   level: 'expert',   filled: true  },
    { day: 0, selected: false, hour: '11h00', type: 'groupe', level: 'debutant', filled: false },
    { day: 0, selected: false, hour: '12h00', type: 'solo',   level: 'amateur',  filled: true  },
    { day: 0, selected: false, hour: '13h00', type: 'groupe', level: 'expert',   filled: true  },

    { day: 1, selected: false, hour: '08h00', type: 'solo',   level: 'debutant', filled: true  },
    { day: 1, selected: false, hour: '09h00', type: 'groupe', level: 'amateur',  filled: false },
    { day: 1, selected: false, hour: '10h00', type: 'solo',   level: 'expert',   filled: false },
    { day: 1, selected: false, hour: '11h00', type: 'groupe', level: 'debutant', filled: false },
    { day: 1, selected: false, hour: '12h00', type: 'solo',   level: 'amateur',  filled: false },
    { day: 1, selected: false, hour: '13h00', type: 'groupe', level: 'expert',   filled: false },

    { day: 2, selected: false, hour: '08h00', type: 'solo',   level: 'debutant', filled: true  },
    { day: 2, selected: false, hour: '09h00', type: 'groupe', level: 'amateur',  filled: true  },
    { day: 2, selected: false, hour: '10h00', type: 'solo',   level: 'expert',   filled: true  },
    { day: 2, selected: false, hour: '11h00', type: 'groupe', level: 'debutant', filled: true  },
    { day: 2, selected: false, hour: '12h00', type: 'solo',   level: 'amateur',  filled: false },
    { day: 2, selected: false, hour: '13h00', type: 'groupe', level: 'expert',   filled: false },

    { day: 3, selected: false, hour: '08h00', type: 'solo',   level: 'debutant', filled: false },
    { day: 3, selected: false, hour: '09h00', type: 'groupe', level: 'amateur',  filled: true  },
    { day: 3, selected: false, hour: '10h00', type: 'solo',   level: 'expert',   filled: true  },
    { day: 3, selected: false, hour: '11h00', type: 'groupe', level: 'debutant', filled: false },
    { day: 3, selected: false, hour: '12h00', type: 'solo',   level: 'amateur',  filled: false },
    { day: 3, selected: false, hour: '13h00', type: 'groupe', level: 'expert',   filled: true  },

    { day: 4, selected: false, hour: '08h00', type: 'solo',   level: 'debutant', filled: true  },
    { day: 4, selected: false, hour: '09h00', type: 'groupe', level: 'amateur',  filled: false },
    { day: 4, selected: false, hour: '10h00', type: 'solo',   level: 'expert',   filled: false },
    { day: 4, selected: false, hour: '11h00', type: 'groupe', level: 'debutant', filled: false },
    { day: 4, selected: false, hour: '12h00', type: 'solo',   level: 'amateur',  filled: false },
    { day: 4, selected: false, hour: '13h00', type: 'groupe', level: 'expert',   filled: true  },

    { day: 5, selected: false, hour: '08h00', type: 'solo',   level: 'debutant', filled: true  },
    { day: 5, selected: false, hour: '09h00', type: 'groupe', level: 'amateur',  filled: true  },
    { day: 5, selected: false, hour: '10h00', type: 'solo',   level: 'expert',   filled: false },
    { day: 5, selected: false, hour: '11h00', type: 'groupe', level: 'debutant', filled: false },
    { day: 5, selected: false, hour: '12h00', type: 'solo',   level: 'amateur',  filled: false },
    { day: 5, selected: false, hour: '13h00', type: 'groupe', level: 'expert',   filled: false },
  ])

  const filteredSessions = computed(() => 
    sessions.value.filter(session => session.day === booking.value.day)
  )

  function useDay(key) {
    booking.value.day = key
  }

  function select(key) {
    if (sessions.value[key].filled) return;
    if (selection.value >= 0) {
      sessions.value[selection.value].selected = false;
    }
    sessions.value[key].selected = true;
    selection.value = key;
  }

</script>


<style>
.bookingTable {
  border-radius: var(--bulma-radius);
}

.day {
  border-radius: var(--bulma-radius);
}

.session {
  cursor: pointer;
}
</style>
