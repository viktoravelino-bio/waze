import { Clock, Star, User, MapPin } from 'phosphor-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

const icons_map = {
  favorite: Star,
  history: Clock,
  contact: User,
  address: MapPin,
};

export function SearchListItem({ item, onPress = () => {} }) {
  const { type, subLabel, label, distance } = item;
  const Icon = icons_map[type];

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {Icon && (
        <Icon
          color="#818181"
          weight="fill"
          style={{
            marginHorizontal: 18,
          }}
        />
      )}
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',

          minHeight: 70,
          flex: 1,
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(0,0,0,0.2)',
        }}
      >
        <View style={{ flex: 1, marginRight: 10 }}>
          {!!label && (
            <Text
              numberOfLines={1}
              style={{
                fontWeight: 'bold',
                color: '#494949',
                fontSize: 18,
              }}
            >
              {label}
            </Text>
          )}
          {!!subLabel && (
            <Text
              numberOfLines={1}
              style={{ fontSize: 16, color: '#555555', marginTop: 3 }}
            >
              {subLabel}
            </Text>
          )}
        </View>

        {/* show distance if have one */}
        {distance !== undefined && (
          <View
            style={{
              marginRight: 18,
              alignItems: 'center',
              minWidth: 55,
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                color: '#494949',
                fontSize: 20,
              }}
            >
              {formatDistance(distance)}
            </Text>
            <Text style={{ fontSize: 14 }}>
              {formatDistanceMetric(distance)}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

// function to format to distance to km or m
function formatDistance(distance) {
  if (distance < 1000) {
    return distance.toFixed(0);
  }
  return (distance / 1000).toFixed(1);
}

function formatDistanceMetric(distance) {
  if (distance < 1000) {
    return 'm';
  }
  return 'km';
}
