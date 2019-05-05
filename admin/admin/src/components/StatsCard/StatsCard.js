import React, { Component } from 'react';
import Card, { CardSection,CardHeader} from "@kiwicom/orbit-components/lib/Card";
import Text from "@kiwicom/orbit-components/lib/Text";
export class StatsCard extends Component {
  render() {
    return (
      <div className="card">
        <Card>
          <CardHeader title={'value'} subTitle="This is a description of the card." />
          <CardSection>
            <Text>
              This is a content of the card.
            </Text>
          </CardSection>
        </Card>
      </div>
    );
  }
}

export default StatsCard;
