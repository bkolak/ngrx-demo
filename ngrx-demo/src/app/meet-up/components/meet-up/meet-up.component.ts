import { Component, OnInit } from '@angular/core';
import { Participants, ParticipantsService } from '../../../../common';

@Component({
  selector: 'app-meet-up',
  templateUrl: './meet-up.component.html',
  styleUrls: ['./meet-up.component.scss']
})
export class MeetUpComponent implements OnInit {
  constructor(private participantService: ParticipantsService) {}

  public participants: Participants[];
  ngOnInit() {
    this.participantService.getParticipants().subscribe(p => {
      this.participants = p;
    });
  }

  onDeleteParticipant(participant: Participants) {
    console.log('delete participants');
    console.log(participant);
    this.participantService.deleteParticipant(participant).subscribe(p => {
      console.log(p);
      this.participants = p;
    });
  }
  onEditParticipant(participant: Participants) {
    console.log('edit participants');
    console.log(participant);
  }
}
