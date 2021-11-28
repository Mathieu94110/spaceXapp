export namespace SpaceXApi {
  export interface ICapsuleSchema {
    serial: {
      type: string;
      required: true;
      unique: true;
    };
    status: {
      type: string;
      enum: ['unknown', 'active', 'retired', 'destroyed'];
      required: true;
    };
    type: {
      type: string;
      enum: ['Dragon 1.0', 'Dragon 1.1', 'Dragon 2.0'];
      required: true;
    };
    dragon: {
      type: 'UUID';
    };
    reuse_count: {
      type: number;
      default: 0;
    };
    water_landings: {
      type: number;
      default: 0;
    };
    land_landings: {
      type: number;
      default: 0;
    };
    last_update: {
      type: string;
      default: null;
    };
    launches: [
      {
        type: 'UUID';
      }
    ];
  }

  export interface ICompanyInfoSchema {
    name: {
      type: string;
    };
    founder: {
      type: string;
    };
    founded: {
      type: number;
    };
    employees: {
      type: number;
    };
    vehicles: {
      type: number;
    };
    launch_sites: {
      type: number;
    };
    test_sites: {
      type: number;
    };
    ceo: {
      type: string;
    };
    cto: {
      type: string;
    };
    coo: {
      type: string;
    };
    cto_propulsion: {
      type: string;
    };
    valuation: {
      type: number;
    };
    headquarters: {
      address: {
        type: string;
      };
      city: {
        type: string;
      };
      state: {
        type: string;
      };
    };
    links: {
      website: {
        type: string;
      };
      flickr: {
        type: string;
      };
      twitter: {
        type: string;
      };
      elon_twitter: {
        type: string;
      };
    };
    summary: {
      type: string;
    };
  }

  export interface ICoreSchema {
    serial: {
      type: string;
      unique: true;
      required: true;
    };
    block: {
      type: number;
      default: null;
    };
    status: {
      type: string;
      enum: ['active', 'inactive', 'unknown', 'expended', 'lost', 'retired'];
      required: true;
    };
    reuse_count: {
      type: number;
      default: 0;
    };
    rtls_attempts: {
      type: number;
      default: 0;
    };
    rtls_landings: {
      type: number;
      default: 0;
    };
    asds_attempts: {
      type: number;
      default: 0;
    };
    asds_landings: {
      type: number;
      default: 0;
    };
    last_update: {
      type: string;
      default: null;
    };
    launches: [
      {
        type: 'UUID';
      }
    ];
  }

  export interface ICrewSchema {
    name: {
      type: string;
      default: null;
    };
    status: {
      type: string;
      required: true;
      enum: ['active', 'inactive', 'retired', unknown];
    };
    agency: {
      type: string;
      default: null;
    };
    image: {
      type: string;
      default: null;
    };
    wikipedia: {
      type: string;
      default: null;
    };
    launches: [
      {
        type: 'UUID';
      }
    ];
  }

  export interface IDragonSchema {
    name: {
      type: string;
      unique: true;
      required: true;
    };
    type: {
      type: string;
      required: true;
    };
    active: {
      type: Boolean;
      required: true;
    };
    crew_capacity: {
      type: number;
      required: true;
    };
    sidewall_angle_deg: {
      type: number;
      required: true;
    };
    orbit_duration_yr: {
      type: number;
      required: true;
    };
    dry_mass_kg: {
      type: number;
      required: true;
    };
    dry_mass_lb: {
      type: number;
      required: true;
    };
    first_flight: {
      type: string;
      default: null;
    };
    heat_shield: {
      material: {
        type: string;
        required: true;
      };
      size_meters: {
        type: number;
        required: true;
      };
      temp_degrees: {
        type: number;
      };
      dev_partner: {
        type: string;
      };
    };
    thrusters: {
      type: Object;
    };
    launch_payload_mass: {
      kg: {
        type: number;
      };
      lb: {
        type: number;
      };
    };
    launch_payload_vol: {
      cubic_meters: {
        type: number;
      };
      cubic_feet: {
        type: number;
      };
    };
    return_payload_mass: {
      kg: {
        type: number;
      };
      lb: {
        type: number;
      };
    };
    return_payload_vol: {
      cubic_meters: {
        type: number;
      };
      cubic_feet: {
        type: number;
      };
    };
    pressurized_capsule: {
      payload_volume: {
        cubic_meters: {
          type: number;
        };
        cubic_feet: {
          type: number;
        };
      };
    };
    trunk: {
      trunk_volume: {
        cubic_meters: {
          type: number;
        };
        cubic_feet: {
          type: number;
        };
      };
      cargo: {
        solar_array: {
          type: number;
        };
        unpressurized_cargo: {
          type: Boolean;
        };
      };
    };
    height_w_trunk: {
      meters: {
        type: number;
      };
      feet: {
        type: number;
      };
    };
    diameter: {
      meters: {
        type: number;
      };
      feet: {
        type: number;
      };
    };
    flickr_images: {
      type: [string];
    };
    wikipedia: {
      type: string;
    };
    description: {
      type: string;
    };
  }
  export interface ILandingPadSchema {
    name: {
      type: string;
      default: null;
    };
    full_name: {
      type: string;
      default: null;
    };
    status: {
      type: string;
      enum: [
        'active',
        'inactive',
        'unknown',
        'retired',
        'lost',
        'under construction'
      ];
      required: true;
    };
    type: {
      type: string;
      default: null;
    };
    locality: {
      type: string;
      default: null;
    };
    region: {
      type: string;
      default: null;
    };
    latitude: {
      type: number;
      default: null;
    };
    longitude: {
      type: number;
      default: null;
    };
    landing_attempts: {
      type: number;
      default: 0;
    };
    landing_successes: {
      type: number;
      default: 0;
    };
    wikipedia: {
      type: string;
      default: null;
    };
    details: {
      type: string;
      default: null;
    };
    launches: [
      {
        type: 'UUID';
      }
    ];
  }

  export interface ILaunchSchema {
    flight_number: {
      type: number;
      required: true;
    };
    name: {
      type: string;
      unique: true;
      required: true;
    };
    date_utc: {
      type: string;
      required: true;
    };
    date_unix: {
      type: number;
      required: true;
    };
    date_local: {
      type: string;
      required: true;
    };
    date_precision: {
      type: string;
      required: true;
      enum: ['half', 'quarter', 'year', 'month', 'day', 'hour'];
    };
    static_fire_date_utc: {
      type: string;
      default: null;
    };
    static_fire_date_unix: {
      type: number;
      default: null;
    };
    tdb: {
      type: Boolean;
      default: false;
    };
    net: {
      type: Boolean;
      default: false;
    };
    window: {
      type: number;
      default: null;
    };
    rocket: {
      type: 'UUID';
      default: null;
    };
    success: {
      type: Boolean;
      default: null;
    };
    failures: [
      {
        time: {
          type: number;
        };
        altitude: {
          type: number;
        };
        reason: {
          type: string;
        };
      }
    ];
    upcoming: {
      type: Boolean;
      required: true;
    };
    details: {
      type: string;
      default: null;
    };
    fairings: {
      reused: {
        type: Boolean;
        default: null;
      };
      recovery_attempt: {
        type: Boolean;
        default: null;
      };
      recovered: {
        type: Boolean;
        default: null;
      };
      ships: ['UUID'];
    };
    crew: [
      {
        crew: {
          type: 'UUID';
          default: null;
        };
        role: {
          type: string;
          default: null;
        };
      }
    ];
    ships: ['UUID'];
    capsules: ['UUID'];
    payloads: ['UUID'];
    launchpad: {
      type: 'UUID';
      default: null;
    };
    cores: [
      {
        core: {
          type: 'UUID';
          default: null;
        };
        flight: {
          type: number;
          default: null;
        };
        gridfins: {
          type: Boolean;
          default: null;
        };
        legs: {
          type: Boolean;
          default: null;
        };
        reused: {
          type: Boolean;
          default: null;
        };
        landing_attempt: {
          type: Boolean;
          default: null;
        };
        landing_success: {
          type: Boolean;
          default: null;
        };
        landing_type: {
          type: string;
          default: null;
        };
        landpad: {
          type: 'UUID';
          default: null;
        };
      }
    ];
    links: {
      patch: {
        small: {
          type: string;
          default: null;
        };
        large: {
          type: string;
          default: null;
        };
      };
      reddit: {
        campaign: {
          type: string;
          default: null;
        };
        launch: {
          type: string;
          default: null;
        };
        media: {
          type: string;
          default: null;
        };
        recovery: {
          type: string;
          default: null;
        };
      };
      flickr: {
        small: [string];
        original: [string];
      };
      presskit: {
        type: string;
        default: null;
      };
      webcast: {
        type: string;
        default: null;
      };
      youtube_id: {
        type: string;
        default: null;
      };
      article: {
        type: string;
        default: null;
      };
      wikipedia: {
        type: string;
        default: null;
      };
    };
    auto_update: {
      type: Boolean;
      default: true;
    };
  }

  export interface ILaunchpadSchema {
    name: {
      type: string;
      default: null;
    };
    full_name: {
      type: string;
      default: null;
    };
    status: {
      type: string;
      enum: [
        'active',
        'inactive',
        'unknown',
        'retired',
        'lost',
        'under construction'
      ];
      required: true;
    };
    locality: {
      type: string;
      default: null;
    };
    region: {
      type: string;
      default: null;
    };
    timezone: {
      type: string;
      default: null;
    };
    latitude: {
      type: number;
      default: null;
    };
    longitude: {
      type: number;
      default: null;
    };
    launch_attempts: {
      type: number;
      default: 0;
    };
    launch_successes: {
      type: number;
      default: 0;
    };
    rockets: ['UUID'];
    launches: ['UUID'];
  }

  export interface IPayloadSchema {
    name: {
      type: string;
      default: null;
      unique: true;
    };
    type: {
      type: string;
      default: null;
    };
    reused: {
      type: Boolean;
      default: false;
    };
    launch: {
      type: 'UUID';
      default: null;
    };
    customers: [string];
    norad_ids: [number];
    nationalities: [string];
    manufacturers: [string];
    mass_kg: {
      type: number;
      default: null;
    };
    mass_lbs: {
      type: number;
      default: null;
    };
    orbit: {
      type: string;
      default: null;
    };
    reference_system: {
      type: string;
      default: null;
    };
    regime: {
      type: string;
      default: null;
    };
    longitude: {
      type: number;
      default: null;
    };
    semi_major_axis_km: {
      type: number;
      default: null;
    };
    eccentricity: {
      type: number;
      default: null;
    };
    periapsis_km: {
      type: number;
      default: null;
    };
    apoapsis_km: {
      type: number;
      default: null;
    };
    inclination_deg: {
      type: number;
      default: null;
    };
    period_min: {
      type: number;
      default: null;
    };
    lifespan_years: {
      type: number;
      default: null;
    };
    epoch: {
      type: string;
      default: null;
    };
    mean_motion: {
      type: number;
      default: null;
    };
    raan: {
      type: number;
      default: null;
    };
    arg_of_pericenter: {
      type: number;
      default: null;
    };
    mean_anomaly: {
      type: number;
      default: null;
    };
    dragon: {
      capsule: {
        type: 'UUID';
        default: null;
      };
      mass_returned_kg: {
        type: number;
        default: null;
      };
      mass_returned_lbs: {
        type: number;
        default: null;
      };
      flight_time_sec: {
        type: number;
        default: null;
      };
      manifest: {
        type: string;
        default: null;
      };
      water_landing: {
        type: Boolean;
        default: null;
      };
      land_landing: {
        type: Boolean;
        default: null;
      };
    };
  }
  export interface IRoadsterSchema {
    name: {
      type: string;
    };
    launch_date_utc: {
      type: string;
    };
    launch_date_unix: {
      type: number;
    };
    launch_mass_kg: {
      type: number;
    };
    launch_mass_lbs: {
      type: number;
    };
    norad_id: {
      type: number;
    };
    epoch_jd: {
      type: number;
    };
    orbit_type: {
      type: string;
    };
    apoapsis_au: {
      type: number;
    };
    periapsis_au: {
      type: number;
    };
    semi_major_axis_au: {
      type: number;
    };
    eccentricity: {
      type: number;
    };
    inclination: {
      type: number;
    };
    longitude: {
      type: number;
    };
    periapsis_arg: {
      type: number;
    };
    period_days: {
      type: number;
    };
    speed_kph: {
      type: number;
    };
    speed_mph: {
      type: number;
    };
    earth_distance_km: {
      type: number;
    };
    earth_distance_mi: {
      type: number;
    };
    mars_distance_km: {
      type: number;
    };
    mars_distance_mi: {
      type: number;
    };
    flickr_images: [string];
    wikipedia: {
      type: string;
    };
    video: {
      type: string;
    };
    details: {
      type: string;
    };
  }
  export interface IRocketSchema {
    name: {
      type: string;
    };
    type: {
      type: string;
    };
    active: {
      type: Boolean;
    };
    stages: {
      type: number;
    };
    boosters: {
      type: number;
    };
    cost_per_launch: {
      type: number;
    };
    success_rate_pct: {
      type: number;
    };
    first_flight: {
      type: string;
    };
    country: {
      type: string;
    };
    company: {
      type: string;
    };
    height: {
      meters: {
        type: number;
      };
      feet: {
        type: number;
      };
    };
    diameter: {
      meters: {
        type: number;
      };
      feet: {
        type: number;
      };
    };
    mass: {
      kg: {
        type: number;
      };
      lb: {
        type: number;
      };
    };
    payload_weights: {
      type: [Object];
    };
    first_stage: {
      reusable: {
        type: Boolean;
      };
      engines: {
        type: number;
      };
      fuel_amount_tons: {
        type: number;
      };
      burn_time_sec: {
        type: number;
      };
      thrust_sea_level: {
        kN: {
          type: number;
        };
        lbf: {
          type: number;
        };
      };
      thrust_vacuum: {
        kN: {
          type: number;
        };
        lbf: {
          type: number;
        };
      };
    };
    second_stage: {
      reusable: {
        type: Boolean;
      };
      engines: {
        type: number;
      };
      fuel_amount_tons: {
        type: number;
      };
      burn_time_sec: {
        type: number;
      };
      thrust: {
        kN: {
          type: number;
        };
        lbf: {
          type: number;
        };
      };
      payloads: {
        option_1: {
          type: string;
        };
        composite_fairing: {
          height: {
            meters: {
              type: number;
            };
            feet: {
              type: number;
            };
          };
          diameter: {
            meters: {
              type: number;
            };
            feet: {
              type: number;
            };
          };
        };
      };
    };
    engines: {
      number: {
        type: number;
      };
      type: {
        type: string;
      };
      version: {
        type: string;
      };
      layout: {
        type: string;
      };
      isp: {
        sea_level: {
          type: number;
        };
        vacuum: {
          type: number;
        };
      };
      engine_loss_max: {
        type: number;
      };
      propellant_1: {
        type: string;
      };
      propellant_2: {
        type: string;
      };
      thrust_sea_level: {
        kN: {
          type: number;
        };
        lbf: {
          type: number;
        };
      };
      thrust_vacuum: {
        kN: {
          type: number;
        };
        lbf: {
          type: number;
        };
      };
      thrust_to_weight: {
        type: number;
      };
    };
    landing_legs: {
      number: {
        type: number;
      };
      material: {
        type: Object;
      };
    };
    flickr_images: {
      type: [string];
    };
    wikipedia: {
      type: string;
    };
    description: {
      type: string;
    };
  }

  export interface IShipSchema {
    name: {
      type: string;
      unique: true;
      required: true;
    };
    legacy_id: {
      type: string;
      default: null;
    };
    model: {
      type: string;
      default: null;
    };
    type: {
      type: string;
      default: null;
    };
    roles: [string];
    active: {
      type: Boolean;
      required: true;
    };
    imo: {
      type: number;
      default: null;
    };
    mmsi: {
      type: number;
      default: null;
    };
    abs: {
      type: number;
      default: null;
    };
    class: {
      type: number;
      default: null;
    };
    mass_kg: {
      type: number;
      default: null;
    };
    mass_lbs: {
      type: number;
      default: null;
    };
    year_built: {
      type: number;
      default: null;
    };
    home_port: {
      type: string;
      default: null;
    };
    status: {
      type: string;
      default: null;
    };
    speed_kn: {
      type: number;
      default: null;
    };
    course_deg: {
      type: number;
      default: null;
    };
    latitude: {
      type: number;
      default: null;
    };
    longitude: {
      type: number;
      default: null;
    };
    last_ais_update: {
      type: string;
      default: null;
    };
    link: {
      type: string;
      default: null;
    };
    image: {
      type: string;
      default: null;
    };
    launches: [
      {
        type: 'UUID';
      }
    ];
  }

  export interface IStarlinkSchema {
    version: {
      type: string;
      default: null;
    };
    launch: {
      type: 'UUID';
      ref: 'Launch';
      default: null;
    };
    longitude: {
      type: number;
      default: null;
    };
    latitude: {
      type: number;
      default: null;
    };
    height_km: {
      type: number;
      default: null;
    };
    velocity_kms: {
      type: number;
      default: null;
    };
    spaceTrack: {
      CCSDS_OMM_VERS: {
        type: string;
        default: null;
      };
      COMMENT: {
        type: string;
        default: null;
      };
      CREATION_DATE: {
        type: string;
        default: null;
      };
      ORIGINATOR: {
        type: string;
        default: null;
      };
      OBJECT_NAME: {
        type: string;
        default: null;
      };
      OBJECT_ID: {
        type: string;
        default: null;
      };
      CENTER_NAME: {
        type: string;
        default: null;
      };
      REF_FRAME: {
        type: string;
        default: null;
      };
      TIME_SYSTEM: {
        type: string;
        default: null;
      };
      MEAN_ELEMENT_THEORY: {
        type: string;
        default: null;
      };
      EPOCH: {
        type: string;
        default: null;
      };
      MEAN_MOTION: {
        type: number;
        default: null;
      };
      ECCENTRICITY: {
        type: number;
        default: null;
      };
      INCLINATION: {
        type: number;
        default: null;
      };
      RA_OF_ASC_NODE: {
        type: number;
        default: null;
      };
      ARG_OF_PERICENTER: {
        type: number;
        default: null;
      };
      MEAN_ANOMALY: {
        type: number;
        default: null;
      };
      EPHEMERIS_TYPE: {
        type: number;
        default: null;
      };
      CLASSIFICATION_TYPE: {
        type: string;
        default: null;
      };
      NORAD_CAT_ID: {
        type: number;
        default: null;
      };
      ELEMENT_SET_NO: {
        type: number;
        default: null;
      };
      REV_AT_EPOCH: {
        type: number;
        default: null;
      };
      BSTAR: {
        type: number;
        default: null;
      };
      MEAN_MOTION_DOT: {
        type: number;
        default: null;
      };
      MEAN_MOTION_DDOT: {
        type: number;
        default: null;
      };
      SEMIMAJOR_AXIS: {
        type: number;
        default: null;
      };
      PERIOD: {
        type: number;
        default: null;
      };
      APOAPSIS: {
        type: number;
        default: null;
      };
      PERIAPSIS: {
        type: number;
        default: null;
      };
      OBJECT_TYPE: {
        type: string;
        default: null;
      };
      RCS_SIZE: {
        type: string;
        default: null;
      };
      COUNTRY_CODE: {
        type: string;
        default: null;
      };
      LAUNCH_DATE: {
        type: string;
        default: null;
      };
      SITE: {
        type: string;
        default: null;
      };
      DECAY_DATE: {
        type: string;
        default: null;
      };
      DECAYED: {
        type: number;
        default: null;
      };
      FILE: {
        type: number;
        default: null;
      };
      GP_ID: {
        type: number;
        default: null;
      };
      TLE_LINE0: {
        type: string;
        default: null;
      };
      TLE_LINE1: {
        type: string;
        default: null;
      };
      TLE_LINE2: {
        type: string;
        default: null;
      };
    };
  }
  export interface IHistoryEventSchema {
    title: {
      type: string;
      default: null;
    };
    event_date_utc: {
      type: string;
      default: null;
    };
    event_date_unix: {
      type: number;
      default: null;
    };
    details: {
      type: string;
      default: null;
    };
    links: {
      article: {
        type: string;
        default: null;
      };
    };
  }
}
